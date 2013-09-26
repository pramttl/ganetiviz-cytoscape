# Visualising a Ganeti Cluster Graph with HTML5, Javascript (using Cytoscape JS)

A front-end component of the Ganetiviz app of [Ganeti Web Manager](https://github.com/osuosl/ganeti_webmgr).
Ganeti Web Manager is a project initiated by the [OSU | Open Source Lab](http://osuosl.org). 
Ganetiviz helps in intuitive visualization of ganeti clusters in the  form of graphical mappings that help System Administrators,
get an easy insight into the configuration of a Ganeti cluster.

#### UPDATE (26-Sep-2013):

This project though fully functional with no external dependencies, is now deprecated 
in favour of [devganetiviz](https://github.com/pramttl/devganetiviz) which is a django
based extension to this project. 
The latter includes some python dependencies like django, but offers multiple advantages.
However you may want to refer to this project for historical reasons and version history.

# Requirements

All required Javascript Libraries are included in this project. A modern HTML5 
compatible web browser should be used.
The use of a Web Server is suggested to run the code without any problems, 
as scripts may use AJAX requests on the fly.

# Setup

1. Download Code and deploy in web directory of any running web server 
like Apache, Nginx,etc.

2. Visit the directory location in the browser.

# Example

[Ganeti-Cluster-Mapping-Example] (http://pramttl.github.io/)

This illustrates some visualization strategies of a ganeti cluster network.

### Features

* Nodes are represented as circles, which can host a number of primary instances, 
  and mirror data for instances hosted on other secondary nodes.
* Any node can play the role of both a primary node or a secondary node.
* Edges between nodes show the direction of failover possibility between two nodes.
* Edge thickness between the nodes gives and idea of the total number of failover
  possibilities existing between two nodes.
* Clicking on a Node causes it to show all the "Instances" attached to it. (Primary Instances)
* Instances "red" in color are not "running" and might require a failover.
* Mousedown on an instance highlights the corresponding failover edge
* Instance Lookup box provided on top-left. Type in a few characters and all matching instances are highlihted.
* Zoom In - Zoom Out using mouse scroll in any region by placing mouse-pointer there first.
* Long-click & hold the graph at any point and pan it in any direction to shift the whole graph object.
* Pan by using arrow keys, or use the previous mouse method: longclick-hold-move
* Select any node ans press the character "s" to see all the secondary instances for a given node.
* Press the character "c" at any time to clear (actually hide) all the visible instances.
* Press the character 'r' to reset the whole graph orientation as in the beginning.
* Most of this important information is available easily pressing character the 'h' ie. help.

### Todo/Upcoming features:

* Better instance arrangement or layout.
* Less subtle, more convenient panning


# Copyright

This work is licensed under a [Creative Commons Attribution-Share Alike 3.0
United States License](http://creativecommons.org/licenses/by-sa/3.0/us/).

vi: set tw=80 ft=markdown :
