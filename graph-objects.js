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
            status: "running",
            secondary_node: "node5.example.com",
            hostname: "instance1.example.com",
            primary_node: "node2.example.com"
        }
    },
    {
        pk: 2,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node3.example.com",
            hostname: "instance10.example.com",
            primary_node: "node1.example.com"
        }
    },
    {
        pk: 3,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node3.example.com",
            hostname: "instance100.example.com",
            primary_node: "node1.example.com"
        }
    },
    {
        pk: 4,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node4.example.com",
            hostname: "instance101.example.com",
            primary_node: "node3.example.com"
        }
    },
    {
        pk: 5,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node4.example.com",
            hostname: "instance102.example.com",
            primary_node: "node3.example.com"
        }
    },
    {
        pk: 6,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node2.example.com",
            hostname: "instance103.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 7,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node5.example.com",
            hostname: "instance104.example.com",
            primary_node: "node3.example.com"
        }
    },
    {
        pk: 8,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node5.example.com",
            hostname: "instance105.example.com",
            primary_node: "node2.example.com"
        }
    },
    {
        pk: 9,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node1.example.com",
            hostname: "instance106.example.com",
            primary_node: "node4.example.com"
        }
    },
    {
        pk: 10,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node5.example.com",
            hostname: "instance107.example.com",
            primary_node: "node4.example.com"
        }
    },
    {
        pk: 11,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node2.example.com",
            hostname: "instance108.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 12,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node3.example.com",
            hostname: "instance109.example.com",
            primary_node: "node1.example.com"
        }
    },
    {
        pk: 13,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node3.example.com",
            hostname: "instance11.example.com",
            primary_node: "node4.example.com"
        }
    },
    {
        pk: 14,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node4.example.com",
            hostname: "instance110.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 15,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node5.example.com",
            hostname: "instance12.example.com",
            primary_node: "node2.example.com"
        }
    },
    {
        pk: 16,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node5.example.com",
            hostname: "instance13.example.com",
            primary_node: "node2.example.com"
        }
    },
    {
        pk: 17,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node5.example.com",
            hostname: "instance14.example.com",
            primary_node: "node3.example.com"
        }
    },
    {
        pk: 18,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node3.example.com",
            hostname: "instance15.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 19,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node4.example.com",
            hostname: "instance16.example.com",
            primary_node: "node3.example.com"
        }
    },
    {
        pk: 20,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node5.example.com",
            hostname: "instance17.example.com",
            primary_node: "node3.example.com"
        }
    },
    {
        pk: 21,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node3.example.com",
            hostname: "instance18.example.com",
            primary_node: "node2.example.com"
        }
    },
    {
        pk: 22,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node5.example.com",
            hostname: "instance19.example.com",
            primary_node: "node2.example.com"
        }
    },
    {
        pk: 23,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node3.example.com",
            hostname: "instance2.example.com",
            primary_node: "node1.example.com"
        }
    },
    {
        pk: 24,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: null,
            hostname: "instance20.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 25,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node5.example.com",
            hostname: "instance21.example.com",
            primary_node: "node3.example.com"
        }
    },
    {
        pk: 26,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node4.example.com",
            hostname: "instance22.example.com",
            primary_node: "node3.example.com"
        }
    },
    {
        pk: 27,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node5.example.com",
            hostname: "instance23.example.com",
            primary_node: "node3.example.com"
        }
    },
    {
        pk: 28,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "ERROR_Down",
            secondary_node: "node4.example.com",
            hostname: "instance24.example.com",
            primary_node: "node1.example.com"
        }
    },
    {
        pk: 29,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node5.example.com",
            hostname: "instance25.example.com",
            primary_node: "node2.example.com"
        }
    },
    {
        pk: 30,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node4.example.com",
            hostname: "instance26.example.com",
            primary_node: "node3.example.com"
        }
    },
    {
        pk: 31,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node4.example.com",
            hostname: "instance27.example.com",
            primary_node: "node1.example.com"
        }
    },
    {
        pk: 32,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node1.example.com",
            hostname: "instance28.example.com",
            primary_node: "node3.example.com"
        }
    },
    {
        pk: 33,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "ERROR_Down",
            secondary_node: "node3.example.com",
            hostname: "instance29.example.com",
            primary_node: "node4.example.com"
        }
    },
    {
        pk: 34,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node2.example.com",
            hostname: "instance3.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 35,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node2.example.com",
            hostname: "instance30.example.com",
            primary_node: "node4.example.com"
        }
    },
    {
        pk: 36,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node1.example.com",
            hostname: "instance31.example.com",
            primary_node: "node4.example.com"
        }
    },
    {
        pk: 37,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node1.example.com",
            hostname: "instance32.example.com",
            primary_node: "node2.example.com"
        }
    },
    {
        pk: 38,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node1.example.com",
            hostname: "instance33.example.com",
            primary_node: "node4.example.com"
        }
    },
    {
        pk: 39,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node4.example.com",
            hostname: "instance34.example.com",
            primary_node: "node3.example.com"
        }
    },
    {
        pk: 40,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "ERROR_Down",
            secondary_node: "node3.example.com",
            hostname: "instance35.example.com",
            primary_node: "node4.example.com"
        }
    },
    {
        pk: 41,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node1.example.com",
            hostname: "instance36.example.com",
            primary_node: "node2.example.com"
        }
    },
    {
        pk: 42,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "ERROR_Down",
            secondary_node: "node1.example.com",
            hostname: "instance37.example.com",
            primary_node: "node2.example.com"
        }
    },
    {
        pk: 43,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: null,
            hostname: "instance38.example.com",
            primary_node: "node2.example.com"
        }
    },
    {
        pk: 44,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node3.example.com",
            hostname: "instance39.example.com",
            primary_node: "node2.example.com"
        }
    },
    {
        pk: 45,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node1.example.com",
            hostname: "instance4.example.com",
            primary_node: "node2.example.com"
        }
    },
    {
        pk: 46,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node5.example.com",
            hostname: "instance40.example.com",
            primary_node: "node2.example.com"
        }
    },
    {
        pk: 47,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node2.example.com",
            hostname: "instance41.example.com",
            primary_node: "node3.example.com"
        }
    },
    {
        pk: 48,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node2.example.com",
            hostname: "instance42.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 49,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node3.example.com",
            hostname: "instance43.example.com",
            primary_node: "node4.example.com"
        }
    },
    {
        pk: 50,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node3.example.com",
            hostname: "instance44.example.com",
            primary_node: "node1.example.com"
        }
    },
    {
        pk: 51,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node4.example.com",
            hostname: "instance45.example.com",
            primary_node: "node1.example.com"
        }
    },
    {
        pk: 52,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node4.example.com",
            hostname: "instance46.example.com",
            primary_node: "node1.example.com"
        }
    },
    {
        pk: 53,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node1.example.com",
            hostname: "instance47.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 54,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node3.example.com",
            hostname: "instance48.example.com",
            primary_node: "node4.example.com"
        }
    },
    {
        pk: 55,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node4.example.com",
            hostname: "instance49.example.com",
            primary_node: "node2.example.com"
        }
    },
    {
        pk: 56,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node3.example.com",
            hostname: "instance5.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 57,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node4.example.com",
            hostname: "instance50.example.com",
            primary_node: "node3.example.com"
        }
    },
    {
        pk: 58,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node5.example.com",
            hostname: "instance51.example.com",
            primary_node: "node3.example.com"
        }
    },
    {
        pk: 59,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node5.example.com",
            hostname: "instance52.example.com",
            primary_node: "node1.example.com"
        }
    },
    {
        pk: 60,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node5.example.com",
            hostname: "instance53.example.com",
            primary_node: "node1.example.com"
        }
    },
    {
        pk: 61,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node1.example.com",
            hostname: "instance54.example.com",
            primary_node: "node3.example.com"
        }
    },
    {
        pk: 62,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node2.example.com",
            hostname: "instance55.example.com",
            primary_node: "node1.example.com"
        }
    },
    {
        pk: 63,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node3.example.com",
            hostname: "instance56.example.com",
            primary_node: "node1.example.com"
        }
    },
    {
        pk: 64,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node2.example.com",
            hostname: "instance57.example.com",
            primary_node: "node4.example.com"
        }
    },
    {
        pk: 65,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node5.example.com",
            hostname: "instance58.example.com",
            primary_node: "node1.example.com"
        }
    },
    {
        pk: 66,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node2.example.com",
            hostname: "instance59.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 67,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node2.example.com",
            hostname: "instance6.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 68,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node2.example.com",
            hostname: "instance60.example.com",
            primary_node: "node4.example.com"
        }
    },
    {
        pk: 69,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node1.example.com",
            hostname: "instance61.example.com",
            primary_node: "node2.example.com"
        }
    },
    {
        pk: 70,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node5.example.com",
            hostname: "instance62.example.com",
            primary_node: "node2.example.com"
        }
    },
    {
        pk: 71,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node4.example.com",
            hostname: "instance63.example.com",
            primary_node: "node3.example.com"
        }
    },
    {
        pk: 72,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: null,
            hostname: "instance64.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 73,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node2.example.com",
            hostname: "instance65.example.com",
            primary_node: "node1.example.com"
        }
    },
    {
        pk: 74,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node2.example.com",
            hostname: "instance66.example.com",
            primary_node: "node4.example.com"
        }
    },
    {
        pk: 75,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node4.example.com",
            hostname: "instance67.example.com",
            primary_node: "node3.example.com"
        }
    },
    {
        pk: 76,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: null,
            hostname: "instance68.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 77,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: null,
            hostname: "instance69.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 78,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node1.example.com",
            hostname: "instance7.example.com",
            primary_node: "node2.example.com"
        }
    },
    {
        pk: 79,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node4.example.com",
            hostname: "instance70.example.com",
            primary_node: "node1.example.com"
        }
    },
    {
        pk: 80,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node1.example.com",
            hostname: "instance71.example.com",
            primary_node: "node4.example.com"
        }
    },
    {
        pk: 81,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node1.example.com",
            hostname: "instance72.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 82,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node2.example.com",
            hostname: "instance73.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 83,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node3.example.com",
            hostname: "instance74.example.com",
            primary_node: "node1.example.com"
        }
    },
    {
        pk: 84,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node4.example.com",
            hostname: "instance75.example.com",
            primary_node: "node3.example.com"
        }
    },
    {
        pk: 85,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node5.example.com",
            hostname: "instance76.example.com",
            primary_node: "node4.example.com"
        }
    },
    {
        pk: 86,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node2.example.com",
            hostname: "instance77.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 87,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node1.example.com",
            hostname: "instance78.example.com",
            primary_node: "node4.example.com"
        }
    },
    {
        pk: 88,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node1.example.com",
            hostname: "instance79.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 89,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node3.example.com",
            hostname: "instance8.example.com",
            primary_node: "node1.example.com"
        }
    },
    {
        pk: 90,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node3.example.com",
            hostname: "instance80.example.com",
            primary_node: "node1.example.com"
        }
    },
    {
        pk: 91,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node5.example.com",
            hostname: "instance81.example.com",
            primary_node: "node3.example.com"
        }
    },
    {
        pk: 92,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node2.example.com",
            hostname: "instance82.example.com",
            primary_node: "node4.example.com"
        }
    },
    {
        pk: 93,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node3.example.com",
            hostname: "instance83.example.com",
            primary_node: "node2.example.com"
        }
    },
    {
        pk: 94,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node2.example.com",
            hostname: "instance84.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 95,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node2.example.com",
            hostname: "instance85.example.com",
            primary_node: "node1.example.com"
        }
    },
    {
        pk: 96,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node2.example.com",
            hostname: "instance86.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 97,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node4.example.com",
            hostname: "instance87.example.com",
            primary_node: "node2.example.com"
        }
    },
    {
        pk: 98,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node2.example.com",
            hostname: "instance88.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 99,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node4.example.com",
            hostname: "instance89.example.com",
            primary_node: "node2.example.com"
        }
    },
    {
        pk: 100,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node1.example.com",
            hostname: "instance9.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 101,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node4.example.com",
            hostname: "instance90.example.com",
            primary_node: "node2.example.com"
        }
    },
    {
        pk: 102,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node4.example.com",
            hostname: "instance91.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 103,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: null,
            hostname: "instance92.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 104,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node4.example.com",
            hostname: "instance93.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 105,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: null,
            hostname: "instance94.example.com",
            primary_node: "node2.example.com"
        }
    },
    {
        pk: 106,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node5.example.com",
            hostname: "instance95.example.com",
            primary_node: "node2.example.com"
        }
    },
    {
        pk: 107,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node3.example.com",
            hostname: "instance96.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 108,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node1.example.com",
            hostname: "instance97.example.com",
            primary_node: "node4.example.com"
        }
    },
    {
        pk: 109,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node2.example.com",
            hostname: "instance98.example.com",
            primary_node: "node5.example.com"
        }
    },
    {
        pk: 110,
        model: "ganeti_web.virtualmachine",
        fields: {
            status: "running",
            secondary_node: "node5.example.com",
            hostname: "instance99.example.com",
            primary_node: "node2.example.com"
        }
    }

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
            offline: false,
            hostname: "node1.example.com",
            ram_total: 496
        }
    },
    {
        pk: 2,
        model: "ganeti_web.node",
        fields: {
            ram_free: 408,
            offline: false,
            hostname: "node2.example.com",
            ram_total: 496
        }
    },
    {
        pk: 3,
        model: "ganeti_web.node",
        fields: {
            ram_free: 408,
            offline: false,
            hostname: "node3.example.com",
            ram_total: 496
        }
    },
    {
        pk: 4,
        model: "ganeti_web.node",
        fields: {
            ram_free: 408,
            offline: false,
            hostname: "node4.example.com",
            ram_total: 496
        }
    },
    {
        pk: 5,
        model: "ganeti_web.node",
        fields: {
            ram_free: 408,
            offline: true,
            hostname: "node5.example.com",
            ram_total: 496
        }
    }
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


