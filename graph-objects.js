/*
[TEST FIXTURE DATA]

Contains JSON Graph objects.
These objects act as test fixtures or placeholders emulating the actual JSON,
that will be fetched from GWM via AJAX.
*/

// Object representing a collection of all the Virtual Machines in a cluster.
var vms_json = [
    {
        "pk": 1,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node2.example.com",
            "hostname": "instance1.example.com",
            "owner": "Pranjal",
            "secondary_node": "node5.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 2,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node1.example.com",
            "hostname": "instance10.example.com",
            "owner": "Pranjal",
            "secondary_node": "node3.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 3,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node1.example.com",
            "hostname": "instance100.example.com",
            "owner": "Pranjal",
            "secondary_node": "node3.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 4,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ADMIN_DOWN",
            "primary_node": "node3.example.com",
            "hostname": "instance101.example.com",
            "owner": "Pranjal",
            "secondary_node": "node4.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 5,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ADMIN_DOWN",
            "primary_node": "node3.example.com",
            "hostname": "instance102.example.com",
            "owner": "Pranjal",
            "secondary_node": "node4.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 6,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node5.example.com",
            "hostname": "instance103.example.com",
            "owner": "Pranjal",
            "secondary_node": "node2.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 7,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node3.example.com",
            "hostname": "instance104.example.com",
            "owner": "Pranjal",
            "secondary_node": "node5.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 8,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node2.example.com",
            "hostname": "instance105.example.com",
            "owner": "Pranjal",
            "secondary_node": "node5.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 9,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node4.example.com",
            "hostname": "instance106.example.com",
            "owner": "Pranjal",
            "secondary_node": "node1.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 10,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ADMIN_DOWN",
            "primary_node": "node4.example.com",
            "hostname": "instance107.example.com",
            "owner": "Pranjal",
            "secondary_node": "node5.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 11,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ERROR_DOWN",
            "primary_node": "node5.example.com",
            "hostname": "instance108.example.com",
            "owner": "Pranjal",
            "secondary_node": "node2.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 12,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node1.example.com",
            "hostname": "instance109.example.com",
            "owner": "Pranjal",
            "secondary_node": "node3.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 13,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ADMIN_DOWN",
            "primary_node": "node4.example.com",
            "hostname": "instance11.example.com",
            "owner": "Pranjal",
            "secondary_node": "node3.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 14,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ADMIN_DOWN",
            "primary_node": "node5.example.com",
            "hostname": "instance110.example.com",
            "owner": "Pranjal",
            "secondary_node": "node4.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 15,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node2.example.com",
            "hostname": "instance12.example.com",
            "owner": "Pranjal",
            "secondary_node": "node5.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 16,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node2.example.com",
            "hostname": "instance13.example.com",
            "owner": "Pranjal",
            "secondary_node": "node5.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 17,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node3.example.com",
            "hostname": "instance14.example.com",
            "owner": "Pranjal",
            "secondary_node": "node5.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 18,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node5.example.com",
            "hostname": "instance15.example.com",
            "owner": "Pranjal",
            "secondary_node": "node3.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 19,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ADMIN_DOWN",
            "primary_node": "node3.example.com",
            "hostname": "instance16.example.com",
            "owner": "Pranjal",
            "secondary_node": "node4.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 20,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node3.example.com",
            "hostname": "instance17.example.com",
            "owner": "Pranjal",
            "secondary_node": "node5.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 21,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ADMIN_DOWN",
            "primary_node": "node2.example.com",
            "hostname": "instance18.example.com",
            "owner": "Pranjal",
            "secondary_node": "node3.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 22,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ERROR_DOWN",
            "primary_node": "node2.example.com",
            "hostname": "instance19.example.com",
            "owner": "Pranjal",
            "secondary_node": "node5.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 23,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ERROR_DOWN",
            "primary_node": "node1.example.com",
            "hostname": "instance2.example.com",
            "owner": "Pranjal",
            "secondary_node": "node3.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 24,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node5.example.com",
            "hostname": "instance20.example.com",
            "owner": "Pranjal",
            "secondary_node": null,
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 25,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ADMIN_DOWN",
            "primary_node": "node3.example.com",
            "hostname": "instance21.example.com",
            "owner": "Pranjal",
            "secondary_node": "node5.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 26,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node3.example.com",
            "hostname": "instance22.example.com",
            "owner": "Pranjal",
            "secondary_node": "node4.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 27,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node3.example.com",
            "hostname": "instance23.example.com",
            "owner": "Pranjal",
            "secondary_node": "node5.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 28,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node1.example.com",
            "hostname": "instance24.example.com",
            "owner": "Pranjal",
            "secondary_node": "node4.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 29,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ADMIN_DOWN",
            "primary_node": "node2.example.com",
            "hostname": "instance25.example.com",
            "owner": "Pranjal",
            "secondary_node": "node5.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 30,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node3.example.com",
            "hostname": "instance26.example.com",
            "owner": "Pranjal",
            "secondary_node": "node4.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 31,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ADMIN_DOWN",
            "primary_node": "node1.example.com",
            "hostname": "instance27.example.com",
            "owner": "Pranjal",
            "secondary_node": "node4.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 32,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node3.example.com",
            "hostname": "instance28.example.com",
            "owner": "Pranjal",
            "secondary_node": "node1.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 33,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node4.example.com",
            "hostname": "instance29.example.com",
            "owner": "Pranjal",
            "secondary_node": "node3.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 34,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ADMIN_DOWN",
            "primary_node": "node5.example.com",
            "hostname": "instance3.example.com",
            "owner": "Pranjal",
            "secondary_node": "node2.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 35,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ADMIN_DOWN",
            "primary_node": "node4.example.com",
            "hostname": "instance30.example.com",
            "owner": "Pranjal",
            "secondary_node": "node2.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 36,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node4.example.com",
            "hostname": "instance31.example.com",
            "owner": "Pranjal",
            "secondary_node": "node1.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 37,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node2.example.com",
            "hostname": "instance32.example.com",
            "owner": "Pranjal",
            "secondary_node": "node1.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 38,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node4.example.com",
            "hostname": "instance33.example.com",
            "owner": "Pranjal",
            "secondary_node": "node1.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 39,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node3.example.com",
            "hostname": "instance34.example.com",
            "owner": "Pranjal",
            "secondary_node": "node4.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 40,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node4.example.com",
            "hostname": "instance35.example.com",
            "owner": "Pranjal",
            "secondary_node": "node3.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 41,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node2.example.com",
            "hostname": "instance36.example.com",
            "owner": "Pranjal",
            "secondary_node": "node1.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 42,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node2.example.com",
            "hostname": "instance37.example.com",
            "owner": "Pranjal",
            "secondary_node": "node1.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 43,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ERROR_DOWN",
            "primary_node": "node2.example.com",
            "hostname": "instance38.example.com",
            "owner": "Pranjal",
            "secondary_node": null,
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 44,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node2.example.com",
            "hostname": "instance39.example.com",
            "owner": "Pranjal",
            "secondary_node": "node3.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 45,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ERROR_DOWN",
            "primary_node": "node2.example.com",
            "hostname": "instance4.example.com",
            "owner": "Pranjal",
            "secondary_node": "node1.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 46,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node2.example.com",
            "hostname": "instance40.example.com",
            "owner": "Pranjal",
            "secondary_node": "node5.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 47,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node3.example.com",
            "hostname": "instance41.example.com",
            "owner": "Pranjal",
            "secondary_node": "node2.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 48,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node5.example.com",
            "hostname": "instance42.example.com",
            "owner": "Pranjal",
            "secondary_node": "node2.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 49,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node4.example.com",
            "hostname": "instance43.example.com",
            "owner": "Pranjal",
            "secondary_node": "node3.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 50,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ADMIN_DOWN",
            "primary_node": "node1.example.com",
            "hostname": "instance44.example.com",
            "owner": "Pranjal",
            "secondary_node": "node3.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 51,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node1.example.com",
            "hostname": "instance45.example.com",
            "owner": "Pranjal",
            "secondary_node": "node4.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 52,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node1.example.com",
            "hostname": "instance46.example.com",
            "owner": "Pranjal",
            "secondary_node": "node4.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 53,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node5.example.com",
            "hostname": "instance47.example.com",
            "owner": "Pranjal",
            "secondary_node": "node1.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 54,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node4.example.com",
            "hostname": "instance48.example.com",
            "owner": "Pranjal",
            "secondary_node": "node3.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 55,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node2.example.com",
            "hostname": "instance49.example.com",
            "owner": "Pranjal",
            "secondary_node": "node4.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 56,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node5.example.com",
            "hostname": "instance5.example.com",
            "owner": "Pranjal",
            "secondary_node": "node3.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 57,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node3.example.com",
            "hostname": "instance50.example.com",
            "owner": "Pranjal",
            "secondary_node": "node4.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 58,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node3.example.com",
            "hostname": "instance51.example.com",
            "owner": "Pranjal",
            "secondary_node": "node5.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 59,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node1.example.com",
            "hostname": "instance52.example.com",
            "owner": "Pranjal",
            "secondary_node": "node5.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 60,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ADMIN_DOWN",
            "primary_node": "node1.example.com",
            "hostname": "instance53.example.com",
            "owner": "Pranjal",
            "secondary_node": "node5.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 61,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node3.example.com",
            "hostname": "instance54.example.com",
            "owner": "Pranjal",
            "secondary_node": "node1.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 62,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node1.example.com",
            "hostname": "instance55.example.com",
            "owner": "Pranjal",
            "secondary_node": "node2.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 63,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node1.example.com",
            "hostname": "instance56.example.com",
            "owner": "Pranjal",
            "secondary_node": "node3.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 64,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ADMIN_DOWN",
            "primary_node": "node4.example.com",
            "hostname": "instance57.example.com",
            "owner": "Pranjal",
            "secondary_node": "node2.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 65,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node1.example.com",
            "hostname": "instance58.example.com",
            "owner": "Pranjal",
            "secondary_node": "node5.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 66,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node5.example.com",
            "hostname": "instance59.example.com",
            "owner": "Pranjal",
            "secondary_node": "node2.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 67,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ADMIN_DOWN",
            "primary_node": "node5.example.com",
            "hostname": "instance6.example.com",
            "owner": "Pranjal",
            "secondary_node": "node2.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 68,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node4.example.com",
            "hostname": "instance60.example.com",
            "owner": "Pranjal",
            "secondary_node": "node2.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 69,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node2.example.com",
            "hostname": "instance61.example.com",
            "owner": "Pranjal",
            "secondary_node": "node1.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 70,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ADMIN_DOWN",
            "primary_node": "node2.example.com",
            "hostname": "instance62.example.com",
            "owner": "Pranjal",
            "secondary_node": "node5.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 71,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node3.example.com",
            "hostname": "instance63.example.com",
            "owner": "Pranjal",
            "secondary_node": "node4.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 72,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node5.example.com",
            "hostname": "instance64.example.com",
            "owner": "Pranjal",
            "secondary_node": null,
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 73,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node1.example.com",
            "hostname": "instance65.example.com",
            "owner": "Pranjal",
            "secondary_node": "node2.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 74,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ERROR_DOWN",
            "primary_node": "node4.example.com",
            "hostname": "instance66.example.com",
            "owner": "Pranjal",
            "secondary_node": "node2.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 75,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ADMIN_DOWN",
            "primary_node": "node3.example.com",
            "hostname": "instance67.example.com",
            "owner": "Pranjal",
            "secondary_node": "node4.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 76,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node5.example.com",
            "hostname": "instance68.example.com",
            "owner": "Pranjal",
            "secondary_node": null,
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 77,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node5.example.com",
            "hostname": "instance69.example.com",
            "owner": "Pranjal",
            "secondary_node": null,
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 78,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node2.example.com",
            "hostname": "instance7.example.com",
            "owner": "Pranjal",
            "secondary_node": "node1.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 79,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ADMIN_DOWN",
            "primary_node": "node1.example.com",
            "hostname": "instance70.example.com",
            "owner": "Pranjal",
            "secondary_node": "node4.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 80,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node4.example.com",
            "hostname": "instance71.example.com",
            "owner": "Pranjal",
            "secondary_node": "node1.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 81,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node5.example.com",
            "hostname": "instance72.example.com",
            "owner": "Pranjal",
            "secondary_node": "node1.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 82,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ADMIN_DOWN",
            "primary_node": "node5.example.com",
            "hostname": "instance73.example.com",
            "owner": "Pranjal",
            "secondary_node": "node2.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 83,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ERROR_DOWN",
            "primary_node": "node1.example.com",
            "hostname": "instance74.example.com",
            "owner": "Pranjal",
            "secondary_node": "node3.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 84,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node3.example.com",
            "hostname": "instance75.example.com",
            "owner": "Pranjal",
            "secondary_node": "node4.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 85,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node4.example.com",
            "hostname": "instance76.example.com",
            "owner": "Pranjal",
            "secondary_node": "node5.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 86,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node5.example.com",
            "hostname": "instance77.example.com",
            "owner": "Pranjal",
            "secondary_node": "node2.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 87,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node4.example.com",
            "hostname": "instance78.example.com",
            "owner": "Pranjal",
            "secondary_node": "node1.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 88,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node5.example.com",
            "hostname": "instance79.example.com",
            "owner": "Pranjal",
            "secondary_node": "node1.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 89,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ADMIN_DOWN",
            "primary_node": "node1.example.com",
            "hostname": "instance8.example.com",
            "owner": "Pranjal",
            "secondary_node": "node3.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 90,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node1.example.com",
            "hostname": "instance80.example.com",
            "owner": "Pranjal",
            "secondary_node": "node3.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 91,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ADMIN_DOWN",
            "primary_node": "node3.example.com",
            "hostname": "instance81.example.com",
            "owner": "Pranjal",
            "secondary_node": "node5.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 92,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node4.example.com",
            "hostname": "instance82.example.com",
            "owner": "Pranjal",
            "secondary_node": "node2.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 93,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ADMIN_DOWN",
            "primary_node": "node2.example.com",
            "hostname": "instance83.example.com",
            "owner": "Pranjal",
            "secondary_node": "node3.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 94,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ERROR_DOWN",
            "primary_node": "node5.example.com",
            "hostname": "instance84.example.com",
            "owner": "Pranjal",
            "secondary_node": "node2.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 95,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node1.example.com",
            "hostname": "instance85.example.com",
            "owner": "Pranjal",
            "secondary_node": "node2.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 96,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node5.example.com",
            "hostname": "instance86.example.com",
            "owner": "Pranjal",
            "secondary_node": "node2.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 97,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node2.example.com",
            "hostname": "instance87.example.com",
            "owner": "Pranjal",
            "secondary_node": "node4.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 98,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node5.example.com",
            "hostname": "instance88.example.com",
            "owner": "Pranjal",
            "secondary_node": "node2.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 99,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node2.example.com",
            "hostname": "instance89.example.com",
            "owner": "Pranjal",
            "secondary_node": "node4.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 100,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ERROR_DOWN",
            "primary_node": "node5.example.com",
            "hostname": "instance9.example.com",
            "owner": "Pranjal",
            "secondary_node": "node1.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 101,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node2.example.com",
            "hostname": "instance90.example.com",
            "owner": "Pranjal",
            "secondary_node": "node4.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 102,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ERROR_DOWN",
            "primary_node": "node5.example.com",
            "hostname": "instance91.example.com",
            "owner": "Pranjal",
            "secondary_node": "node4.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 103,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node5.example.com",
            "hostname": "instance92.example.com",
            "owner": "Pranjal",
            "secondary_node": null,
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 104,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node5.example.com",
            "hostname": "instance93.example.com",
            "owner": "Pranjal",
            "secondary_node": "node4.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 105,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ADMIN_DOWN",
            "primary_node": "node2.example.com",
            "hostname": "instance94.example.com",
            "owner": "Pranjal",
            "secondary_node": null,
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 106,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node2.example.com",
            "hostname": "instance95.example.com",
            "owner": "Pranjal",
            "secondary_node": "node5.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 107,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "ADMIN_DOWN",
            "primary_node": "node5.example.com",
            "hostname": "instance96.example.com",
            "owner": "Pranjal",
            "secondary_node": "node3.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 108,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node4.example.com",
            "hostname": "instance97.example.com",
            "owner": "Pranjal",
            "secondary_node": "node1.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 109,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node5.example.com",
            "hostname": "instance98.example.com",
            "owner": "Pranjal",
            "secondary_node": "node2.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
        }
    },
    {
        "pk": 110,
        "model": "ganeti_web.virtualmachine",
        "fields": {
            "status": "running",
            "primary_node": "node2.example.com",
            "hostname": "instance99.example.com",
            "owner": "Pranjal",
            "secondary_node": "node5.example.com",
            "ram": 128,
            "minram": -1,
            "operating_system": "image+cirros"
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


