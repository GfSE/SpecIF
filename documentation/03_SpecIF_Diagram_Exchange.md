# SpecIF Diagram Exchange with SVG

Diagram exchange is an essential concept of SpecIF to achieve the goal of data interchange in the entire PLM lifecycle where different tools are used that create data containing diagram drwawings.

The SpecIF standard defines some additional XML tags and attributes to include semantic diagram information into SVG graphics as SVG metadata. 
Also SpecIF (re-)uses some tags defined in the OMG standard for Diagram Definition (DD) (OMG No.: formal/2015-06-01).

## XML manespaces in SVG

To differ the tags defined by SpecIF, SVG and OMG Diagram Definition the concept of XML-manespaces is used. 
The following namespaces are relevant for SpecIF-SVG diagram exchange:

* xmlns:specif="https://specif.de/schema/v1.1/DI"
* xmlns:di="http://www.omg.org/spec/DD/20100524/DI"
* xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"

The namespaces and the used SVG version must be declared in the outermost tag (Tagname: *svg*) of the SVG XML-structure. 
Example:

    <svg xmlns:di="http://www.omg.org/spec/DD/20100524/DI"  
         xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" 
         xmlns="http://www.w3.org/2000/svg"
         xmlns:specif="https://specif.de/schema/v1.1/DI"
         version="1.1"
         ...
         >

The tags defined by SpecIF are defined by a XML-schema definition with the namespace URI https://specif.de/schema/v1.1/DI. 
Tags reused from the OMG diagram exchange specifications are defined in the other two namespaces.
SVG builds typically the standard namespace, so each XML-tag without an explicit namespace setting is a SVG-tag.
  
## Embedding SpecIF-SVG data into Resource-Elements

The content of a diagram is embedded typically in a Resource element representing a diagram.
SpecIF defines for that purpose the resource class *SpecIF:Diagram*. 
The SpecIF:Diagram-resource has a property with the property class title also named *SpecIF:Diagram*.
The property value is able to store formatted XHTML-data. 

To include the diagram in a SpecIF data set, two possible ways are available:

1.  Embedd the SVG or a binary graphic data format directly into the XHTML as XML resp. base64-encoded image data.
2.  Store the diagram data in a seperate file and include a image-reference (*img*-tag) to the XHTML property vale.
  
The usage of SVG with metadata should be the prefered way in embedding diagram information in SpecIF. 
By using binary graphic formats you loose the possibility of metadata and you can not exchange the diagram information semantically, but only graphically. 

## Coordinate system

The SpecIF-conformant SVG graphics follows the definition of the SVG and the OMG Diagram Definiton standard. 
The x-axis is horizontal and its coordinate values increases to the right with negative coordinates allowed. 
Similarly, the y-axis is vertical and its coordinate values increases to the bottom with negative coordinates allowed. 

![Diagram coordinate system](./images/CoordinateSystem.png)   

## SVG structure and grouping

TO BE REWORKED...

The SVG standard defines the concept of groups. 
A group can contain further groups as child elements and/or a set of graphical elements like circles, rectangles or lines. 
A SVG diagram that follows the SpecIF standard defines one SVG group for the entire diagram as outermost element. 
Inside these diagram group, a list of children define the graphical visualization elements for resources and statements. 
Also these children are group elements. 
So for each resource and statement, that is visible on the graphics a SVG group is definied.

![Principle of the SpecIF SVG grouping](./images/DiagramGrouping.png)

The image above shows the principle. 
The big box around is the group of the entire diagram. 
Inside we have three child groups for the three contained elements: Two boxes, named with 1 and 2, and one connector, named with 3. 

In the SVG we will use always the following group structure for SpecIF diagram interchange example:

    <?xml version="1.0" encoding="utf-8"?>
    <svg xmlns:di="http://www.omg.org/spec/DD/20100524/DI" 
         xmlns:specif="https://specif.de/schema/v1.0/DI" 
         xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" 
         width="1322" height="1134" version="1.1" 
         xmlns="http://www.w3.org/2000/svg">
      <g class="specif-diagram">
        <metadata>
            ... <!-- metadata for semantically diagram interchange -->
        </metadata>
        <g class="specif-resource-diagram-element"  >
          <metadata>
              ... <!-- metadata for semantically diagram interchange -->
          </metadata>
          ... <!-- graphical definition of the resource -->
        </g>
        ... <!-- more diagram elements -->
        <g class="specif-statement-diagram-element">
          <metadata>
              ... <!-- metadata for semantically diagram interchange -->
          </metadata>
          ...  <!-- graphical definition of the statement -->
        </g>
      </g>
    </svg>

The sequence of the group elements determine the drawing order. 
So the top-most element shall be defined with the last group-child. 
In the example the drawing is done in the sequence: diagram, 1, 2, 3

## SpecIF diagram exchange metadata

TO BE REWORKED...

To enable the navigation from SVG to the resource and statement data and to include some additional semantic information to SVG, the SpecIF standard defines tags to be included in the metadata of the SVG group elements (&lt;g&gt;)

For declaring groups as diagram elements representing resources, statements or the entire diagram, the ``class`` attribute of the group tag is set to the following values:

* ``specif-diagram`` for the root-group, representing the entire diagram
* ``specif-resource-diagram-element`` for a group defining the visualization of a SpecIF resource - child of specif-diagram group.
* ``specif-statement-diagram-element`` for a group defining the visualization of a SpecIF statement - child of specif-diagram group.
 
In the SVG-group defining the graphical representation of a Resource, a tag called ``resourceDiagramElement`` is used to define a reference to the Resource elemenet.
The tag has an attribute to reference the ID of a Resource and an attribute to reference the revision of the Resource. The revision reference attribute may be empty. In that case the newest revision of the resource is referenced.
    
    <g class="specif-resource-diagram-element">
      <metadata>
        <specif:resourceDiagramElement idRef="_2290801A_126B_499d_B607_F78D0FB4D822" revisionRef="79dc4f81cc4081ca982d191b2ed44e3564582cb1">
          <dc:Bounds x="365" y="363" width="570" height="398" />
        </specif:resourceDiagramElement>
      </metadata>
      ...

Inside the resourceDiagramElement-tag a Bounds-tag definig the coordinates and boundaries of the graphical representation is mandatory. The Bounds-tag is reused from the OMG Diagram Definition standard. 

For a statement the following metadata structure is used, defining a SpecIF-specific tag called ``statementDiagramElement``:

    <g class="specif-statement-diagram-element">
      <metadata>
        <specif:statementDiagramElement idRef="_FE3E03B7_5CB9_4371_BE9F_699C78CC410E" revisionRef="79dc4f81cc4081ca982daaab2ed44e3564582cb1" layoutStyle="bezier">
          <di:waypoint x="403" y="271" />
          <di:waypoint x="72" y="271" />
          <di:waypoint x="72" y="330" />
        </specif:statementDiagramElement>
      </metadata>
      ...

The sub-tags of the statementDiagramElement-tag are waypoint tags. They define the coordinates of the connector in the diagram from start to end. 
If the connector is not a direct line, the waypoints of the connector are the start points, the points in between and the end point. 
So each connector has two or more waypoints defined.

The reference to the statement is done similar as the reference to a resource element using the unique IDs for ID and optional for revision.

An optional attribute ```layoutStyle`` defines the connector layout style:

* If the attribute is missing, the connector is drawn as a path of direct lines using the cooredinates defined by the waypoint tags. 
* ``bezier`` The connector is drawn as bezier curve
* ``rounded`` The corners of the connector in the waypoints inbetween start and end are connected rounded 


