var vms_json = [
  {
    pk: 1,
    model: "ganeti_web.virtualmachine",
    fields: {
      secondary_node: null,
      hostname: "instance1.example.org",
      primary_node: "node1.example.org"
      }
  },
  {
    pk: 2,
    model: "ganeti_web.virtualmachine",
    fields: {
      secondary_node: "node3.example.org",
      hostname: "instance2.example.org",
      primary_node: "node2.example.org"
      }
  },
  {
    pk: 3,
    model: "ganeti_web.virtualmachine",
    fields: {
      secondary_node: "node2.example.org",
      hostname: "instance3.example.org",
      primary_node: "node3.example.org"
      }
  },
  {
    pk: 4,
    model: "ganeti_web.virtualmachine",
    fields: {
      secondary_node: "node1.example.org",
      hostname: "instance4.example.org",
      primary_node: "node4.example.org"
    }
  },
  {
    pk: 5,
    model: "ganeti_web.virtualmachine",
    fields: {
      secondary_node: "node2.example.org",
      hostname: "instance5.example.org",
      primary_node: "node3.example.org"
    }
  },
]

// 'g' in gnodes signifies a ganeti node, to avoid the multiple connotations of the word node in this project.
// While most gnodes are covered in the vms_json object; this is needed since there might be some nodes which do not have an instance yet.
var gnodes_json = [
  {
    pk: 1,
    model: "ganeti_web.node",
      fields: {
        ram_free: 408,
        hostname: "node1.example.org",
        ram_total: 496
      }
  },
  {
      pk: 2,
      model: "ganeti_web.node",
        fields: {
          ram_free: 289,
          hostname: "node2.example.org",
          ram_total: 496
        }
  },
  {
      pk: 3,
      model: "ganeti_web.node",
        fields: {
          ram_free: 301,
          hostname: "node3.example.org",
          ram_total: 496
        }
  },
  {
      pk: 4,
      model: "ganeti_web.node",
        fields: {
          ram_free: 450,
          hostname: "node4.example.org",
          ram_total: 496
        }
  },
  {
      pk: 5,
      model: "ganeti_web.node",
        fields: {
          ram_free: 400,
          hostname: "node5.example.org",
          ram_total: 496
        }
  },
]


CytoNodeList = []
gnodes_json.forEach(function(node) {
    gnode = node["fields"]["hostname"]

    // Adding the ganeti nodes to the Cytoscape NodeList
    cytoscape_node_obj =       
      {data: { id: gnode, name: gnode, weight: 100,},
        position: pp[0], classes:'ganeti-node'};
    CytoNodeList.push(cytoscape_node_obj);
});


VMGraph = {}
FailoverLinks = {}
vms_json.forEach(function(vm) {
    vm_hostname = vm["fields"]["hostname"]
    pnode = vm["fields"]["primary_node"]    // A Ganeti Node
    snode = vm["fields"]["secondary_node"]  // A Ganeti Node

    // A HashMap object that will contain mapping from VM to pnode or snode for fast search.
    VMGraph[vm_hostname] = [pnode,snode]

    // FailoverLinks will contain number of failover possibilities b/n a PNode & an SNode.
    try {
      if (snode != null){
        FailoverLinks[pnode][snode] += 1
      }
    }
    catch(exception){
        obj = {}
        obj[snode] = 1
        FailoverLinks[pnode] = obj
    }

    // Building the Cytoscape Graph elements.
    // Graph Nodes - Instances:
    cytoscape_node_obj =       
        {data: { id: vm_hostname, name: vm_hostname, weight: 0.05,},
	      position: rndisc(pp[0],27,31), classes:'ganeti-instance' }
    CytoNodeList.push(cytoscape_node_obj);
});
