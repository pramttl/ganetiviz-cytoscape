/*
[TEST FIXTURE DATA]

Contains JSON Graph objects.
These objects act as test fixtures or placeholders emulating the actual JSON,
that will be fetched from GWM via AJAX.
*/

// Object representing a collection of all the Virtual Machines in a cluster.
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
  {
    pk: 6,
    model: "ganeti_web.virtualmachine",
    fields: {
      secondary_node: "node4.example.org",
      hostname: "instance6.example.org",
      primary_node: "node2.example.org"
    }
  },
]

// Object representing a collection of all the physical Nodes in a cluster.
var gnodes_json = [
// 'g' in gnodes signifies a ganeti node, to avoid the multiple connotations of the word node in this project.
// While most gnodes are covered in the vms_json object; this is needed since there might be some nodes which do not have an instance yet.
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


/*
    // Actually these JSON objects will be fetched via AJAX, something like this:

    $.ajaxSetup({
        async: false
    });

    $.getJSON("/ganetiviz/vms/{{ cluster_hostname }}",function( json ) {
      vms_json = json
    });

    $.getJSON("/ganetiviz/nodes/{{ cluster_hostname }}",function( json ) {
      gnodes_json = json
    });

    $.ajaxSetup({
        async: true
    });
*/


