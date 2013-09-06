# 
# Code to read the raw Ganeti Cluster Graph and print JSON fixture data as output for "github.com/pramttl/ganetiviz-cytoscape" project.
# $ python fixture-json-generator.py < graph_prod.txt
# Pranjal Mittal
#

# Dictionary which maps nodes to list of primary nodes. 
nodedict = {}

# Dictionary mapping vm to list of 2 nodes, first being the primary node and the latter being the secondary node.
vmdict = {}


vm_status_possibilities = {'running':0.7, 'ERROR_DOWN': 0.1, 'ADMIN_DOWN':0.2}

# Helps generated random fixture data, albeit with some control. 
# Based on Weighted Randomized Selection - http://ijsme.org/a-graphical-perspective-to-online-ranking-and-matchmaking/
from weighted_selection import weighted_pick

import pickle
OBJECT_STORAGE_FILE = 'pickled_objects.txt'
from simplejson import dumps

while True:
    s = raw_input()
    if s == '':
        break
    l = s.split()
    if l[2] == "None":
        l[2] = None

    ##Creating the PrimaryNode-Instance relations.
    try:
        nodedict[l[1]]
        nodedict[l[1]].append(l[0])
    except KeyError:
        nodedict[l[1]] = [l[0],]


    ##Creating the PrimaryNode-Instance relations.
    vmdict[l[0]] = [l[1],l[2]]


def create_vms_list(vmdict):
    # Takes in a "vmdict" and converts it into a list of JSON objects representing ganeti nodes.
    vms_list = []
    i = 0
    for instance in sorted(vmdict.keys()):
        pnode = vmdict[instance][0]
        snode = vmdict[instance][1]
        i+=1
        vm_obj = {}
        vm_obj["status"] = weighted_pick(vm_status_possibilities)
        vm_obj["ram"] = 128
        vm_obj["hostname"] =  instance
        vm_obj["secondary_node__hostname"] = snode
        vm_obj["operating_system"] = "image+cirros"
        vm_obj["owner"] = 'Pranjal'
        vm_obj["minram"] = -1
        vm_obj["primary_node__hostnmae"] = pnode
        vms_list.append(vm_obj)  
    return vms_list


def create_gnodes_list(nodedict):
    # Takes in a "nodedict" and converts it into a list of JSON objects representing ganeti nodes.
    gnodes_list = []
    i = 0
    for node_hostname in sorted(nodedict.keys()):
        i+=1
        gnode_obj = {}
        gnode_obj["ram_free"] =  408
        gnode_obj["offline"] = False
        gnode_obj["hostname"] = node_hostname
        gnode_obj["ram_total"] = 496
        gnodes_list.append(gnode_obj)  
    return gnodes_list

def json_data(nodedict, vmdict):
    data = { "nodes": create_gnodes_list(nodedict), 
                  "vms": create_vms_list(vmdict) }
    json = dumps(data)
    return json


print json_data(nodedict,vmdict)

