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
]

VMGraph = {}
vms_json.forEach(function(vm) {
    VMGraph[vm["fields"]["hostname"]] = [vm["fields"]["primary_node"],vm["fields"]["secondary_node"]]
});
