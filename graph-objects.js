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

VMGraph = {}
FailoverLinks = {}
vms_json.forEach(function(vm) {
    vm_hostname = vm["fields"]["hostname"]
    pnode = vm["fields"]["primary_node"]
    snode = vm["fields"]["secondary_node"]

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
});
