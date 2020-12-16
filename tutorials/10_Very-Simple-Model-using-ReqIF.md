# Tutorial 10: 'Very Simple Model using ReqIF'

Before, we have discussed how to represent a very simple model, see Tutorial 6: [Very Simple Model (FMC)](./06_Very-Simple-Model-FMC.md). Now we will relate some requirements to the model-elements. 

As we have discussed all concepts before, let's right away discuss the full example. The following items have been added:
- A *dataType* "DT-Priority" with enumerated values. Note that vocabulary terms have been used.
- A *propertyClass* "PC-Priority" using the *dataType* "DT-Priority".
- Two additional *resourceClasses* "RC-Folder" and "RC-Requirement". The instances of the former are used as chapter titles in the hierarchy and the instances of the latter are the requirements, of course.
- A *statementClass* "SC-satisfies" for satisfies-relations between instances, where any instance of "RC-Actor" or "RC-State" can serve as *subject* and any instance of "RC-Requirement" can serve as *object*.
- Three requirements have been added as *resources* of class "RC-Requirement".
- Three new *statements* of class "SC-satisfies. The example shows that a model-element can satisfy multiple requirements, but generally it is also possible that a requirement must be satisfied by several model-elements. Each of the n:m relations are a separate *statement*.
- Finally the hierarchy defines two chapters with requirements and the system-model; where the model-elements shown in the diagram are placed in a subordinated folder. In other cases, a glossary as a separate chapter lists the model-elements appearing on any of the model-diagrams.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<REQ-IF
    xmlns="http://www.omg.org/spec/ReqIF/20110401/reqif.xsd"
    xmlns:xhtml="http://www.w3.org/1999/xhtml">
    <THE-HEADER>
        <REQ-IF-HEADER IDENTIFIER="ACP-Very-Simple-Model-FMC">
            <COMMENT></COMMENT>
            <CREATION-TIME>2020-10-18T14:06:13.298Z</CREATION-TIME>
            <REQ-IF-TOOL-ID></REQ-IF-TOOL-ID>
            <REQ-IF-VERSION>1.0</REQ-IF-VERSION>
            <SOURCE-TOOL-ID></SOURCE-TOOL-ID>
            <TITLE>Very Simple Model (FMC) with Requirements</TITLE>
        </REQ-IF-HEADER>
    </THE-HEADER>
    <CORE-CONTENT>
        <REQ-IF-CONTENT>
            <DATATYPES>
                <DATATYPE-DEFINITION-STRING IDENTIFIER="DT-ShortString" LONG-NAME="String [96]" DESC="String with length 96" LAST-CHANGE="2018-05-10T11:54:00+01:00" MAX-LENGTH="96" />
                <DATATYPE-DEFINITION-XHTML IDENTIFIER="DT-FormattedText" LONG-NAME="Formatted Text with length 8192" DESC="" LAST-CHANGE="2018-05-10T11:54:00+01:00"/>
                <DATATYPE-DEFINITION-ENUMERATION IDENTIFIER="DT-Priority" LONG-NAME="SpecIF:Priority" DESC="Enumerated values for priority" LAST-CHANGE="2020-10-17T10:00:00+01:00">
                    <SPECIFIED-VALUES>
                        <ENUM-VALUE IDENTIFIER="V-Prio-0" LONG-NAME="SpecIF:priorityHigh" LAST-CHANGE="2020-10-17T10:00:00+01:00" >
                            <PROPERTIES>
                                <EMBEDDED-VALUE KEY="0" OTHER-CONTENT="" />
                            </PROPERTIES>
                        </ENUM-VALUE>
                        <ENUM-VALUE IDENTIFIER="V-Prio-1" LONG-NAME="SpecIF:priorityRatherHigh" LAST-CHANGE="2020-10-17T10:00:00+01:00" >
                            <PROPERTIES>
                                <EMBEDDED-VALUE KEY="1" OTHER-CONTENT="" />
                            </PROPERTIES>
                        </ENUM-VALUE>
                        <ENUM-VALUE IDENTIFIER="V-Prio-2" LONG-NAME="SpecIF:priorityMedium" LAST-CHANGE="2020-10-17T10:00:00+01:00" >
                            <PROPERTIES>
                                <EMBEDDED-VALUE KEY="2" OTHER-CONTENT="" />
                            </PROPERTIES>
                        </ENUM-VALUE>
                        <ENUM-VALUE IDENTIFIER="V-Prio-3" LONG-NAME="SpecIF:priorityRatherLow" LAST-CHANGE="2020-10-17T10:00:00+01:00" >
                            <PROPERTIES>
                                <EMBEDDED-VALUE KEY="3" OTHER-CONTENT="" />
                            </PROPERTIES>
                        </ENUM-VALUE>
                        <ENUM-VALUE IDENTIFIER="V-Prio-4" LONG-NAME="SpecIF:priorityLow" LAST-CHANGE="2020-10-17T10:00:00+01:00" >
                            <PROPERTIES>
                                <EMBEDDED-VALUE KEY="4" OTHER-CONTENT="" />
                            </PROPERTIES>
                        </ENUM-VALUE>
                    </SPECIFIED-VALUES>
                </DATATYPE-DEFINITION-ENUMERATION>
            </DATATYPES>
            <SPEC-TYPES>
                <SPEC-OBJECT-TYPE IDENTIFIER="RC-Folder" LONG-NAME="SpecIF:Heading" DESC="Folder with title and text for chapters or descriptive paragraphs." LAST-CHANGE="2016-05-26T08:59:00+02:00">
                    <SPEC-ATTRIBUTES>
                        <ATTRIBUTE-DEFINITION-STRING IDENTIFIER="RC-39088987" LONG-NAME="ReqIF.Name" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                            <TYPE>
                                <DATATYPE-DEFINITION-STRING-REF>DT-ShortString</DATATYPE-DEFINITION-STRING-REF>
                            </TYPE>
                        </ATTRIBUTE-DEFINITION-STRING>
                        <ATTRIBUTE-DEFINITION-XHTML IDENTIFIER="RC-2105671980" LONG-NAME="ReqIF.Text" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                            <TYPE>
                                <DATATYPE-DEFINITION-XHTML-REF>DT-FormattedText</DATATYPE-DEFINITION-XHTML-REF>
                            </TYPE>
                        </ATTRIBUTE-DEFINITION-XHTML>
                    </SPEC-ATTRIBUTES>
                </SPEC-OBJECT-TYPE>
                <SPEC-OBJECT-TYPE IDENTIFIER="RC-Requirement" LONG-NAME="IREB:Requirement" DESC="A 'Requirement' is a singular documented physical and functional need that a particular design, product or process must be able to perform." LAST-CHANGE="2020-03-26T22:59:00+02:00">
                    <SPEC-ATTRIBUTES>
                        <ATTRIBUTE-DEFINITION-STRING IDENTIFIER="RC--1446161954" LONG-NAME="ReqIF.Name" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                            <TYPE>
                                <DATATYPE-DEFINITION-STRING-REF>DT-ShortString</DATATYPE-DEFINITION-STRING-REF>
                            </TYPE>
                        </ATTRIBUTE-DEFINITION-STRING>
                        <ATTRIBUTE-DEFINITION-XHTML IDENTIFIER="RC-1814911305" LONG-NAME="ReqIF.Text" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                            <TYPE>
                                <DATATYPE-DEFINITION-XHTML-REF>DT-FormattedText</DATATYPE-DEFINITION-XHTML-REF>
                            </TYPE>
                        </ATTRIBUTE-DEFINITION-XHTML>
                        <ATTRIBUTE-DEFINITION-ENUMERATION IDENTIFIER="RC--906989705" LONG-NAME="SpecIF:Priority" MULTI-VALUED="false" LAST-CHANGE="2020-03-26T22:59:00+02:00">
                            <TYPE>
                                <DATATYPE-DEFINITION-ENUMERATION-REF>DT-Priority</DATATYPE-DEFINITION-ENUMERATION-REF>
                            </TYPE>
                        </ATTRIBUTE-DEFINITION-ENUMERATION>
                    </SPEC-ATTRIBUTES>
                </SPEC-OBJECT-TYPE>
                <SPEC-OBJECT-TYPE IDENTIFIER="RC-Diagram" LONG-NAME="SpecIF:Diagram" DESC="A 'Diagram' is a graphical model view with a specific communication purpose, e.g. a business process or system composition." LAST-CHANGE="2018-05-10T11:54:00+01:00">
                    <SPEC-ATTRIBUTES>
                        <ATTRIBUTE-DEFINITION-STRING IDENTIFIER="RC-2123069774" LONG-NAME="ReqIF.Name" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                            <TYPE>
                                <DATATYPE-DEFINITION-STRING-REF>DT-ShortString</DATATYPE-DEFINITION-STRING-REF>
                            </TYPE>
                        </ATTRIBUTE-DEFINITION-STRING>
                        <ATTRIBUTE-DEFINITION-XHTML IDENTIFIER="RC-638120921" LONG-NAME="ReqIF.Text" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                            <TYPE>
                                <DATATYPE-DEFINITION-XHTML-REF>DT-FormattedText</DATATYPE-DEFINITION-XHTML-REF>
                            </TYPE>
                        </ATTRIBUTE-DEFINITION-XHTML>
                        <ATTRIBUTE-DEFINITION-XHTML IDENTIFIER="RC-616257328" LONG-NAME="SpecIF:Diagram" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                            <TYPE>
                                <DATATYPE-DEFINITION-XHTML-REF>DT-FormattedText</DATATYPE-DEFINITION-XHTML-REF>
                            </TYPE>
                        </ATTRIBUTE-DEFINITION-XHTML>
                        <ATTRIBUTE-DEFINITION-STRING IDENTIFIER="RC-2123271677" LONG-NAME="ReqIF.Category" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                            <TYPE>
                                <DATATYPE-DEFINITION-STRING-REF>DT-ShortString</DATATYPE-DEFINITION-STRING-REF>
                            </TYPE>
                        </ATTRIBUTE-DEFINITION-STRING>
                    </SPEC-ATTRIBUTES>
                </SPEC-OBJECT-TYPE>
                <SPEC-OBJECT-TYPE IDENTIFIER="RC-Actor" LONG-NAME="FMC:Actor" DESC="An 'Actor' is a fundamental model element type representing an active entity, be it an activity, a process step, a function, a system component or a role." LAST-CHANGE="2018-05-10T11:54:00+01:00">
                    <SPEC-ATTRIBUTES>
                        <ATTRIBUTE-DEFINITION-STRING IDENTIFIER="RC--1794657044" LONG-NAME="ReqIF.Name" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                            <TYPE>
                                <DATATYPE-DEFINITION-STRING-REF>DT-ShortString</DATATYPE-DEFINITION-STRING-REF>
                            </TYPE>
                        </ATTRIBUTE-DEFINITION-STRING>
                        <ATTRIBUTE-DEFINITION-XHTML IDENTIFIER="RC-241044091" LONG-NAME="ReqIF.Text" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                            <TYPE>
                                <DATATYPE-DEFINITION-XHTML-REF>DT-FormattedText</DATATYPE-DEFINITION-XHTML-REF>
                            </TYPE>
                        </ATTRIBUTE-DEFINITION-XHTML>
                        <ATTRIBUTE-DEFINITION-STRING IDENTIFIER="RC--1794455141" LONG-NAME="ReqIF.Category" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                            <TYPE>
                                <DATATYPE-DEFINITION-STRING-REF>DT-ShortString</DATATYPE-DEFINITION-STRING-REF>
                            </TYPE>
                        </ATTRIBUTE-DEFINITION-STRING>
                    </SPEC-ATTRIBUTES>
                </SPEC-OBJECT-TYPE>
                <SPEC-OBJECT-TYPE IDENTIFIER="RC-State" LONG-NAME="FMC:State" DESC="A 'State' is a fundamental model element type representing a passive entity, be it a value, a document, an information storage or even a physical shape." LAST-CHANGE="2018-05-10T11:54:00+01:00">
                    <SPEC-ATTRIBUTES>
                        <ATTRIBUTE-DEFINITION-STRING IDENTIFIER="RC--2144816432" LONG-NAME="ReqIF.Name" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                            <TYPE>
                                <DATATYPE-DEFINITION-STRING-REF>DT-ShortString</DATATYPE-DEFINITION-STRING-REF>
                            </TYPE>
                        </ATTRIBUTE-DEFINITION-STRING>
                        <ATTRIBUTE-DEFINITION-XHTML IDENTIFIER="RC-1830970391" LONG-NAME="ReqIF.Text" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                            <TYPE>
                                <DATATYPE-DEFINITION-XHTML-REF>DT-FormattedText</DATATYPE-DEFINITION-XHTML-REF>
                            </TYPE>
                        </ATTRIBUTE-DEFINITION-XHTML>
                        <ATTRIBUTE-DEFINITION-STRING IDENTIFIER="RC--2144614529" LONG-NAME="ReqIF.Category" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                            <TYPE>
                                <DATATYPE-DEFINITION-STRING-REF>DT-ShortString</DATATYPE-DEFINITION-STRING-REF>
                            </TYPE>
                        </ATTRIBUTE-DEFINITION-STRING>
                    </SPEC-ATTRIBUTES>
                </SPEC-OBJECT-TYPE>
                <SPEC-RELATION-TYPE IDENTIFIER="SC-shows" LONG-NAME="SpecIF:shows" DESC="'Diagram' shows 'Model-Element'" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                    <SPEC-ATTRIBUTES>
                        <ATTRIBUTE-DEFINITION-STRING IDENTIFIER="RC--1667082036" LONG-NAME="ReqIF.Name" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                            <TYPE>
                                <DATATYPE-DEFINITION-STRING-REF>DT-ShortString</DATATYPE-DEFINITION-STRING-REF>
                            </TYPE>
                        </ATTRIBUTE-DEFINITION-STRING>
                        <ATTRIBUTE-DEFINITION-XHTML IDENTIFIER="RC-1780304539" LONG-NAME="ReqIF.Text" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                            <TYPE>
                                <DATATYPE-DEFINITION-XHTML-REF>DT-FormattedText</DATATYPE-DEFINITION-XHTML-REF>
                            </TYPE>
                        </ATTRIBUTE-DEFINITION-XHTML>
                    </SPEC-ATTRIBUTES>
                </SPEC-RELATION-TYPE>
                <SPEC-RELATION-TYPE IDENTIFIER="SC-writes" LONG-NAME="SpecIF:writes" DESC="'Actor' (Role, Function) writes 'State' (Information)" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                    <SPEC-ATTRIBUTES>
                        <ATTRIBUTE-DEFINITION-STRING IDENTIFIER="RC--1881561452" LONG-NAME="ReqIF.Name" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                            <TYPE>
                                <DATATYPE-DEFINITION-STRING-REF>DT-ShortString</DATATYPE-DEFINITION-STRING-REF>
                            </TYPE>
                        </ATTRIBUTE-DEFINITION-STRING>
                        <ATTRIBUTE-DEFINITION-XHTML IDENTIFIER="RC--1653576749" LONG-NAME="ReqIF.Text" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                            <TYPE>
                                <DATATYPE-DEFINITION-XHTML-REF>DT-FormattedText</DATATYPE-DEFINITION-XHTML-REF>
                            </TYPE>
                        </ATTRIBUTE-DEFINITION-XHTML>
                    </SPEC-ATTRIBUTES>
                </SPEC-RELATION-TYPE>
                <SPEC-RELATION-TYPE IDENTIFIER="SC-reads" LONG-NAME="SpecIF:reads" DESC="'Actor' (Role, Function) reads 'State' (Information)" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                    <SPEC-ATTRIBUTES>
                        <ATTRIBUTE-DEFINITION-STRING IDENTIFIER="RC-2032807525" LONG-NAME="ReqIF.Name" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                            <TYPE>
                                <DATATYPE-DEFINITION-STRING-REF>DT-ShortString</DATATYPE-DEFINITION-STRING-REF>
                            </TYPE>
                        </ATTRIBUTE-DEFINITION-STRING>
                        <ATTRIBUTE-DEFINITION-XHTML IDENTIFIER="RC-664774370" LONG-NAME="ReqIF.Text" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                            <TYPE>
                                <DATATYPE-DEFINITION-XHTML-REF>DT-FormattedText</DATATYPE-DEFINITION-XHTML-REF>
                            </TYPE>
                        </ATTRIBUTE-DEFINITION-XHTML>
                    </SPEC-ATTRIBUTES>
                </SPEC-RELATION-TYPE>
                <SPEC-RELATION-TYPE IDENTIFIER="SC-satisfies" LONG-NAME="oslc_rm:satisfies" DESC="Statement: Model-Element satisfies Requirement" LAST-CHANGE="2016-05-26T08:59:00+02:00">
                    <SPEC-ATTRIBUTES>
                        <ATTRIBUTE-DEFINITION-STRING IDENTIFIER="RC--79168319" LONG-NAME="ReqIF.Name" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                            <TYPE>
                                <DATATYPE-DEFINITION-STRING-REF>DT-ShortString</DATATYPE-DEFINITION-STRING-REF>
                            </TYPE>
                        </ATTRIBUTE-DEFINITION-STRING>
                        <ATTRIBUTE-DEFINITION-XHTML IDENTIFIER="RC-32127238" LONG-NAME="ReqIF.Text" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                            <TYPE>
                                <DATATYPE-DEFINITION-XHTML-REF>DT-FormattedText</DATATYPE-DEFINITION-XHTML-REF>
                            </TYPE>
                        </ATTRIBUTE-DEFINITION-XHTML>
                    </SPEC-ATTRIBUTES>
                </SPEC-RELATION-TYPE>
                <SPECIFICATION-TYPE IDENTIFIER="RC-HierarchyRoot" LONG-NAME="SpecIF:Outline" DESC="Metadata of a document outline (hierarchy)." LAST-CHANGE="2016-05-26T08:59:00+02:00">
                    <SPEC-ATTRIBUTES>
                        <ATTRIBUTE-DEFINITION-STRING IDENTIFIER="RC-2080686058" LONG-NAME="ReqIF.Name" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                            <TYPE>
                                <DATATYPE-DEFINITION-STRING-REF>DT-ShortString</DATATYPE-DEFINITION-STRING-REF>
                            </TYPE>
                        </ATTRIBUTE-DEFINITION-STRING>
                        <ATTRIBUTE-DEFINITION-XHTML IDENTIFIER="RC--1645460035" LONG-NAME="ReqIF.Text" LAST-CHANGE="2018-05-10T11:54:00+01:00">
                            <TYPE>
                                <DATATYPE-DEFINITION-XHTML-REF>DT-FormattedText</DATATYPE-DEFINITION-XHTML-REF>
                            </TYPE>
                        </ATTRIBUTE-DEFINITION-XHTML>
                    </SPEC-ATTRIBUTES>
                </SPECIFICATION-TYPE>
            </SPEC-TYPES>
            <SPEC-OBJECTS>
                <SPEC-OBJECT IDENTIFIER="Folder-Requirements" LONG-NAME="Requirements" DESC="" LAST-CHANGE="2020-03-06T08:32:00+01:00">
                    <TYPE>
                        <SPEC-OBJECT-TYPE-REF>RC-Folder</SPEC-OBJECT-TYPE-REF>
                    </TYPE>
                    <VALUES>
                        <ATTRIBUTE-VALUE-STRING THE-VALUE="Requirements">
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-STRING-REF>RC-39088987</ATTRIBUTE-DEFINITION-STRING-REF>
                            </DEFINITION>
                        </ATTRIBUTE-VALUE-STRING>
                    </VALUES>
                </SPEC-OBJECT>
                <SPEC-OBJECT IDENTIFIER="Req-1a8016e2872e78ecadc50feddc00029b" LONG-NAME="Data Volume" DESC="" LAST-CHANGE="2020-10-17T10:00:00+01:00">
                    <TYPE>
                        <SPEC-OBJECT-TYPE-REF>RC-Requirement</SPEC-OBJECT-TYPE-REF>
                    </TYPE>
                    <VALUES>
                        <ATTRIBUTE-VALUE-STRING THE-VALUE="Data Volume">
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-STRING-REF>RC--1446161954</ATTRIBUTE-DEFINITION-STRING-REF>
                            </DEFINITION>
                        </ATTRIBUTE-VALUE-STRING>
                        <ATTRIBUTE-VALUE-XHTML>
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-XHTML-REF>RC-1814911305</ATTRIBUTE-DEFINITION-XHTML-REF>
                            </DEFINITION>
                            <THE-VALUE><xhtml:div><xhtml:p>The data store MUST support a total volume up to 850 GB.</xhtml:p></xhtml:div></THE-VALUE>
                        </ATTRIBUTE-VALUE-XHTML>
                        <ATTRIBUTE-VALUE-ENUMERATION>
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-ENUMERATION-REF>RC--906989705</ATTRIBUTE-DEFINITION-ENUMERATION-REF>
                            </DEFINITION>
                            <VALUES>
                                <ENUM-VALUE-REF>V-Prio-1</ENUM-VALUE-REF>
                            </VALUES>
                        </ATTRIBUTE-VALUE-ENUMERATION>
                    </VALUES>
                </SPEC-OBJECT>
                <SPEC-OBJECT IDENTIFIER="Req-0Z7916e2872e78ecadc50feddc00918a" LONG-NAME="Consistency" DESC="" LAST-CHANGE="2020-10-17T10:00:00+01:00">
                    <TYPE>
                        <SPEC-OBJECT-TYPE-REF>RC-Requirement</SPEC-OBJECT-TYPE-REF>
                    </TYPE>
                    <VALUES>
                        <ATTRIBUTE-VALUE-STRING THE-VALUE="Consistency">
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-STRING-REF>RC--1446161954</ATTRIBUTE-DEFINITION-STRING-REF>
                            </DEFINITION>
                        </ATTRIBUTE-VALUE-STRING>
                        <ATTRIBUTE-VALUE-XHTML>
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-XHTML-REF>RC-1814911305</ATTRIBUTE-DEFINITION-XHTML-REF>
                            </DEFINITION>
                            <THE-VALUE><xhtml:div><xhtml:p>The data store MUST be consistent at all times.</xhtml:p></xhtml:div></THE-VALUE>
                        </ATTRIBUTE-VALUE-XHTML>
                        <ATTRIBUTE-VALUE-ENUMERATION>
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-ENUMERATION-REF>RC--906989705</ATTRIBUTE-DEFINITION-ENUMERATION-REF>
                            </DEFINITION>
                            <VALUES>
                                <ENUM-VALUE-REF>V-Prio-0</ENUM-VALUE-REF>
                            </VALUES>
                        </ATTRIBUTE-VALUE-ENUMERATION>
                    </VALUES>
                </SPEC-OBJECT>
                <SPEC-OBJECT IDENTIFIER="Req-2b9016e2872e78ecadc50feddc0013Ac" LONG-NAME="Response Time" DESC="" LAST-CHANGE="2020-10-17T10:00:00+01:00">
                    <TYPE>
                        <SPEC-OBJECT-TYPE-REF>RC-Requirement</SPEC-OBJECT-TYPE-REF>
                    </TYPE>
                    <VALUES>
                        <ATTRIBUTE-VALUE-STRING THE-VALUE="Response Time">
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-STRING-REF>RC--1446161954</ATTRIBUTE-DEFINITION-STRING-REF>
                            </DEFINITION>
                        </ATTRIBUTE-VALUE-STRING>
                        <ATTRIBUTE-VALUE-XHTML>
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-XHTML-REF>RC-1814911305</ATTRIBUTE-DEFINITION-XHTML-REF>
                            </DEFINITION>
                            <THE-VALUE><xhtml:div><xhtml:p>The system SHOULD respond on user queries within 300 ms.</xhtml:p></xhtml:div></THE-VALUE>
                        </ATTRIBUTE-VALUE-XHTML>
                        <ATTRIBUTE-VALUE-ENUMERATION>
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-ENUMERATION-REF>RC--906989705</ATTRIBUTE-DEFINITION-ENUMERATION-REF>
                            </DEFINITION>
                            <VALUES>
                                <ENUM-VALUE-REF>V-Prio-2</ENUM-VALUE-REF>
                            </VALUES>
                        </ATTRIBUTE-VALUE-ENUMERATION>
                    </VALUES>
                </SPEC-OBJECT>
                <SPEC-OBJECT IDENTIFIER="Folder-SystemModel" LONG-NAME="System Model" DESC="" LAST-CHANGE="2020-03-06T08:32:00+01:00">
                    <TYPE>
                        <SPEC-OBJECT-TYPE-REF>RC-Folder</SPEC-OBJECT-TYPE-REF>
                    </TYPE>
                    <VALUES>
                        <ATTRIBUTE-VALUE-STRING THE-VALUE="System Model">
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-STRING-REF>RC-39088987</ATTRIBUTE-DEFINITION-STRING-REF>
                            </DEFINITION>
                        </ATTRIBUTE-VALUE-STRING>
                    </VALUES>
                </SPEC-OBJECT>
                <SPEC-OBJECT IDENTIFIER="Diagram-aec0df7900010000017001eaf53e8876" LONG-NAME="IT-Integration: FiCo-Application and FiCo-Data" DESC="" LAST-CHANGE="2020-03-06T08:32:00+01:00">
                    <TYPE>
                        <SPEC-OBJECT-TYPE-REF>RC-Diagram</SPEC-OBJECT-TYPE-REF>
                    </TYPE>
                    <VALUES>
                        <ATTRIBUTE-VALUE-STRING THE-VALUE="IT-Integration: FiCo-Application and FiCo-Data">
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-STRING-REF>RC-2123069774</ATTRIBUTE-DEFINITION-STRING-REF>
                            </DEFINITION>
                        </ATTRIBUTE-VALUE-STRING>
                        <ATTRIBUTE-VALUE-XHTML>
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-XHTML-REF>RC-638120921</ATTRIBUTE-DEFINITION-XHTML-REF>
                            </DEFINITION>
                            <THE-VALUE>
                                <xhtml:div><xhtml:div></xhtml:div></xhtml:div>
                            </THE-VALUE>
                        </ATTRIBUTE-VALUE-XHTML>
                        <ATTRIBUTE-VALUE-XHTML>
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-XHTML-REF>RC-616257328</ATTRIBUTE-DEFINITION-XHTML-REF>
                            </DEFINITION>
                            <THE-VALUE><xhtml:div><xhtml:p><xhtml:object type="image/png" data="files_and_images/Very-Simple-Model-FMC.png">Notation: FMC Block Diagram</xhtml:object></xhtml:p></xhtml:div></THE-VALUE>
                        </ATTRIBUTE-VALUE-XHTML>
                        <ATTRIBUTE-VALUE-STRING THE-VALUE="FMC Block Diagram">
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-STRING-REF>RC-2123271677</ATTRIBUTE-DEFINITION-STRING-REF>
                            </DEFINITION>
                        </ATTRIBUTE-VALUE-STRING>
                    </VALUES>
                </SPEC-OBJECT>
                <SPEC-OBJECT IDENTIFIER="MEl-50fbfe8f0029b1a8016ea86245a9d83a" LONG-NAME="FiCo-Application" DESC="" LAST-CHANGE="2020-03-06T09:04:00+01:00">
                    <TYPE>
                        <SPEC-OBJECT-TYPE-REF>RC-Actor</SPEC-OBJECT-TYPE-REF>
                    </TYPE>
                    <VALUES>
                        <ATTRIBUTE-VALUE-STRING THE-VALUE="FiCo-Application">
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-STRING-REF>RC--1794657044</ATTRIBUTE-DEFINITION-STRING-REF>
                            </DEFINITION>
                        </ATTRIBUTE-VALUE-STRING>
                        <ATTRIBUTE-VALUE-XHTML>
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-XHTML-REF>RC-241044091</ATTRIBUTE-DEFINITION-XHTML-REF>
                            </DEFINITION>
                            <THE-VALUE><xhtml:div><xhtml:p>IT-Application for Finance and Controlling.</xhtml:p></xhtml:div></THE-VALUE>
                        </ATTRIBUTE-VALUE-XHTML>
                    </VALUES>
                </SPEC-OBJECT>
                <SPEC-OBJECT IDENTIFIER="MEl-50feddc00029b1a8016e2872e78ecadc" LONG-NAME="FiCo-Data" DESC="" LAST-CHANGE="2020-03-06T09:03:00+01:00">
                    <TYPE>
                        <SPEC-OBJECT-TYPE-REF>RC-State</SPEC-OBJECT-TYPE-REF>
                    </TYPE>
                    <VALUES>
                        <ATTRIBUTE-VALUE-STRING THE-VALUE="FiCo-Data">
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-STRING-REF>RC--2144816432</ATTRIBUTE-DEFINITION-STRING-REF>
                            </DEFINITION>
                        </ATTRIBUTE-VALUE-STRING>
                        <ATTRIBUTE-VALUE-XHTML>
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-XHTML-REF>RC-1830970391</ATTRIBUTE-DEFINITION-XHTML-REF>
                            </DEFINITION>
                            <THE-VALUE><xhtml:div><xhtml:p>Finance and Controlling Data, such as cost-units per project with budget, accrued cost etc.</xhtml:p></xhtml:div></THE-VALUE>
                        </ATTRIBUTE-VALUE-XHTML>
                    </VALUES>
                </SPEC-OBJECT>
            </SPEC-OBJECTS>
            <SPEC-RELATIONS>
                <SPEC-RELATION IDENTIFIER="Sshw-aec0df7900010000017001eaf53e8876-50fbfe8f0029b1a8016ea86245a9d83a" LONG-NAME="" DESC="'FMC Block Diagram' shows 'FiCo-Application'" LAST-CHANGE="2020-03-06T08:32:00+01:00">
                    <TYPE>
                        <SPEC-RELATION-TYPE-REF>SC-shows</SPEC-RELATION-TYPE-REF>
                    </TYPE>
                    <VALUES>
                        <ATTRIBUTE-VALUE-STRING THE-VALUE="SpecIF:shows">
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-STRING-REF>RC--1667082036</ATTRIBUTE-DEFINITION-STRING-REF>
                            </DEFINITION>
                        </ATTRIBUTE-VALUE-STRING>
                        <ATTRIBUTE-VALUE-XHTML>
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-XHTML-REF>RC-1780304539</ATTRIBUTE-DEFINITION-XHTML-REF>
                            </DEFINITION>
                            <THE-VALUE>
                                <xhtml:div>&#39;FMC Block Diagram&#39; shows &#39;FiCo-Application&#39;</xhtml:div>
                            </THE-VALUE>
                        </ATTRIBUTE-VALUE-XHTML>
                    </VALUES>
                    <SOURCE>
                        <SPEC-OBJECT-REF>Diagram-aec0df7900010000017001eaf53e8876</SPEC-OBJECT-REF>
                    </SOURCE>
                    <TARGET>
                        <SPEC-OBJECT-REF>MEl-50fbfe8f0029b1a8016ea86245a9d83a</SPEC-OBJECT-REF>
                    </TARGET>
                </SPEC-RELATION>
                <SPEC-RELATION IDENTIFIER="Sshw-aec0df7900010000017001eaf53e8876-50feddc00029b1a8016e2872e78ecadc" LONG-NAME="" DESC="'FMC Block Diagram' shows 'FiCo-Data'" LAST-CHANGE="2020-03-06T08:32:00+01:00">
                    <TYPE>
                        <SPEC-RELATION-TYPE-REF>SC-shows</SPEC-RELATION-TYPE-REF>
                    </TYPE>
                    <VALUES>
                        <ATTRIBUTE-VALUE-STRING THE-VALUE="SpecIF:shows">
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-STRING-REF>RC--1667082036</ATTRIBUTE-DEFINITION-STRING-REF>
                            </DEFINITION>
                        </ATTRIBUTE-VALUE-STRING>
                        <ATTRIBUTE-VALUE-XHTML>
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-XHTML-REF>RC-1780304539</ATTRIBUTE-DEFINITION-XHTML-REF>
                            </DEFINITION>
                            <THE-VALUE>
                                <xhtml:div>&#39;FMC Block Diagram&#39; shows &#39;FiCo-Data&#39;</xhtml:div>
                            </THE-VALUE>
                        </ATTRIBUTE-VALUE-XHTML>
                    </VALUES>
                    <SOURCE>
                        <SPEC-OBJECT-REF>Diagram-aec0df7900010000017001eaf53e8876</SPEC-OBJECT-REF>
                    </SOURCE>
                    <TARGET>
                        <SPEC-OBJECT-REF>MEl-50feddc00029b1a8016e2872e78ecadc</SPEC-OBJECT-REF>
                    </TARGET>
                </SPEC-RELATION>
                <SPEC-RELATION IDENTIFIER="Swri-50fbfe8f0029b1a8016ea86245a9d83a-50feddc00029b1a8016e2872e78ecadc" LONG-NAME="" DESC="'FiCo-Application' writes 'FiCo-Data'" LAST-CHANGE="2020-03-06T09:05:00+01:00">
                    <TYPE>
                        <SPEC-RELATION-TYPE-REF>SC-writes</SPEC-RELATION-TYPE-REF>
                    </TYPE>
                    <VALUES>
                        <ATTRIBUTE-VALUE-STRING THE-VALUE="SpecIF:writes">
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-STRING-REF>RC--1881561452</ATTRIBUTE-DEFINITION-STRING-REF>
                            </DEFINITION>
                        </ATTRIBUTE-VALUE-STRING>
                        <ATTRIBUTE-VALUE-XHTML>
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-XHTML-REF>RC--1653576749</ATTRIBUTE-DEFINITION-XHTML-REF>
                            </DEFINITION>
                            <THE-VALUE>
                                <xhtml:div>&#39;FiCo-Application&#39; writes &#39;FiCo-Data&#39;</xhtml:div>
                            </THE-VALUE>
                        </ATTRIBUTE-VALUE-XHTML>
                    </VALUES>
                    <SOURCE>
                        <SPEC-OBJECT-REF>MEl-50fbfe8f0029b1a8016ea86245a9d83a</SPEC-OBJECT-REF>
                    </SOURCE>
                    <TARGET>
                        <SPEC-OBJECT-REF>MEl-50feddc00029b1a8016e2872e78ecadc</SPEC-OBJECT-REF>
                    </TARGET>
                </SPEC-RELATION>
                <SPEC-RELATION IDENTIFIER="Srea-50fbfe8f0029b1a8016ea86245a9d83a-50feddc00029b1a8016e2872e78ecadc" LONG-NAME="" DESC="'FiCo-Application' reads 'FiCo-Data'" LAST-CHANGE="2020-03-06T09:05:00+01:00">
                    <TYPE>
                        <SPEC-RELATION-TYPE-REF>SC-reads</SPEC-RELATION-TYPE-REF>
                    </TYPE>
                    <VALUES>
                        <ATTRIBUTE-VALUE-STRING THE-VALUE="SpecIF:reads">
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-STRING-REF>RC-2032807525</ATTRIBUTE-DEFINITION-STRING-REF>
                            </DEFINITION>
                        </ATTRIBUTE-VALUE-STRING>
                        <ATTRIBUTE-VALUE-XHTML>
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-XHTML-REF>RC-664774370</ATTRIBUTE-DEFINITION-XHTML-REF>
                            </DEFINITION>
                            <THE-VALUE>
                                <xhtml:div>&#39;FiCo-Application&#39; reads &#39;FiCo-Data&#39;</xhtml:div>
                            </THE-VALUE>
                        </ATTRIBUTE-VALUE-XHTML>
                    </VALUES>
                    <SOURCE>
                        <SPEC-OBJECT-REF>MEl-50fbfe8f0029b1a8016ea86245a9d83a</SPEC-OBJECT-REF>
                    </SOURCE>
                    <TARGET>
                        <SPEC-OBJECT-REF>MEl-50feddc00029b1a8016e2872e78ecadc</SPEC-OBJECT-REF>
                    </TARGET>
                </SPEC-RELATION>
                <SPEC-RELATION IDENTIFIER="Ssat-50feddc00029b1a8016e2872e78ecadc-1a8016e2872e78ecadc50feddc00029b" LONG-NAME="" DESC="'FiCo-Data' satisfies 'Data Volume'" LAST-CHANGE="2020-10-17T10:00:00+01:00">
                    <TYPE>
                        <SPEC-RELATION-TYPE-REF>SC-satisfies</SPEC-RELATION-TYPE-REF>
                    </TYPE>
                    <VALUES>
                        <ATTRIBUTE-VALUE-STRING THE-VALUE="oslc_rm:satisfies">
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-STRING-REF>RC--79168319</ATTRIBUTE-DEFINITION-STRING-REF>
                            </DEFINITION>
                        </ATTRIBUTE-VALUE-STRING>
                        <ATTRIBUTE-VALUE-XHTML>
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-XHTML-REF>RC-32127238</ATTRIBUTE-DEFINITION-XHTML-REF>
                            </DEFINITION>
                            <THE-VALUE>
                                <xhtml:div>&#39;FiCo-Data&#39; satisfies &#39;Data Volume&#39;</xhtml:div>
                            </THE-VALUE>
                        </ATTRIBUTE-VALUE-XHTML>
                    </VALUES>
                    <SOURCE>
                        <SPEC-OBJECT-REF>MEl-50feddc00029b1a8016e2872e78ecadc</SPEC-OBJECT-REF>
                    </SOURCE>
                    <TARGET>
                        <SPEC-OBJECT-REF>Req-1a8016e2872e78ecadc50feddc00029b</SPEC-OBJECT-REF>
                    </TARGET>
                </SPEC-RELATION>
                <SPEC-RELATION IDENTIFIER="Ssat-50feddc00029b1a8016e2872e78ecadc-0Z7916e2872e78ecadc50feddc00918a" LONG-NAME="" DESC="'FiCo-Data' satisfies 'Consistency'" LAST-CHANGE="2020-10-17T10:00:00+01:00">
                    <TYPE>
                        <SPEC-RELATION-TYPE-REF>SC-satisfies</SPEC-RELATION-TYPE-REF>
                    </TYPE>
                    <VALUES>
                        <ATTRIBUTE-VALUE-STRING THE-VALUE="oslc_rm:satisfies">
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-STRING-REF>RC--79168319</ATTRIBUTE-DEFINITION-STRING-REF>
                            </DEFINITION>
                        </ATTRIBUTE-VALUE-STRING>
                        <ATTRIBUTE-VALUE-XHTML>
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-XHTML-REF>RC-32127238</ATTRIBUTE-DEFINITION-XHTML-REF>
                            </DEFINITION>
                            <THE-VALUE>
                                <xhtml:div>&#39;FiCo-Data&#39; satisfies &#39;Consistency&#39;</xhtml:div>
                            </THE-VALUE>
                        </ATTRIBUTE-VALUE-XHTML>
                    </VALUES>
                    <SOURCE>
                        <SPEC-OBJECT-REF>MEl-50feddc00029b1a8016e2872e78ecadc</SPEC-OBJECT-REF>
                    </SOURCE>
                    <TARGET>
                        <SPEC-OBJECT-REF>Req-0Z7916e2872e78ecadc50feddc00918a</SPEC-OBJECT-REF>
                    </TARGET>
                </SPEC-RELATION>
                <SPEC-RELATION IDENTIFIER="Ssat-50fbfe8f0029b1a8016ea86245a9d83a-2b9016e2872e78ecadc50feddc0013Ac" LONG-NAME="" DESC="'FiCo-Application' satisfies 'Response Time'" LAST-CHANGE="2020-10-17T10:00:00+01:00">
                    <TYPE>
                        <SPEC-RELATION-TYPE-REF>SC-satisfies</SPEC-RELATION-TYPE-REF>
                    </TYPE>
                    <VALUES>
                        <ATTRIBUTE-VALUE-STRING THE-VALUE="oslc_rm:satisfies">
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-STRING-REF>RC--79168319</ATTRIBUTE-DEFINITION-STRING-REF>
                            </DEFINITION>
                        </ATTRIBUTE-VALUE-STRING>
                        <ATTRIBUTE-VALUE-XHTML>
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-XHTML-REF>RC-32127238</ATTRIBUTE-DEFINITION-XHTML-REF>
                            </DEFINITION>
                            <THE-VALUE>
                                <xhtml:div>&#39;FiCo-Application&#39; satisfies &#39;Response Time&#39;</xhtml:div>
                            </THE-VALUE>
                        </ATTRIBUTE-VALUE-XHTML>
                    </VALUES>
                    <SOURCE>
                        <SPEC-OBJECT-REF>MEl-50fbfe8f0029b1a8016ea86245a9d83a</SPEC-OBJECT-REF>
                    </SOURCE>
                    <TARGET>
                        <SPEC-OBJECT-REF>Req-2b9016e2872e78ecadc50feddc0013Ac</SPEC-OBJECT-REF>
                    </TARGET>
                </SPEC-RELATION>
            </SPEC-RELATIONS>
            <SPECIFICATIONS>
                <SPECIFICATION IDENTIFIER="H-R-339829973" LONG-NAME="Very Simple Model (FMC) with Requirements" DESC="" LAST-CHANGE="2020-10-18T14:06:13.298Z">
                    <TYPE>
                        <SPECIFICATION-TYPE-REF>RC-HierarchyRoot</SPECIFICATION-TYPE-REF>
                    </TYPE>
                    <VALUES>
                        <ATTRIBUTE-VALUE-STRING THE-VALUE="Very Simple Model (FMC) with Requirements">
                            <DEFINITION>
                                <ATTRIBUTE-DEFINITION-STRING-REF>RC-2080686058</ATTRIBUTE-DEFINITION-STRING-REF>
                            </DEFINITION>
                        </ATTRIBUTE-VALUE-STRING>
                    </VALUES>
                    <CHILDREN>
                        <SPEC-HIERARCHY IDENTIFIER="N-Folder-Requirements" LONG-NAME="" LAST-CHANGE="2020-10-17T10:00:00+01:00">
                            <OBJECT>
                                <SPEC-OBJECT-REF>Folder-Requirements</SPEC-OBJECT-REF>
                            </OBJECT>
                            <CHILDREN>
                                <SPEC-HIERARCHY IDENTIFIER="N-1a8016e2872e78ecadc50feddc00029b" LONG-NAME="" LAST-CHANGE="2020-10-17T10:00:00+01:00">
                                    <OBJECT>
                                        <SPEC-OBJECT-REF>Req-1a8016e2872e78ecadc50feddc00029b</SPEC-OBJECT-REF>
                                    </OBJECT>
                                </SPEC-HIERARCHY>
                                <SPEC-HIERARCHY IDENTIFIER="N-0Z7916e2872e78ecadc50feddc00918a" LONG-NAME="" LAST-CHANGE="2020-10-17T10:00:00+01:00">
                                    <OBJECT>
                                        <SPEC-OBJECT-REF>Req-0Z7916e2872e78ecadc50feddc00918a</SPEC-OBJECT-REF>
                                    </OBJECT>
                                </SPEC-HIERARCHY>
                                <SPEC-HIERARCHY IDENTIFIER="N-2b9016e2872e78ecadc50feddc0013Ac" LONG-NAME="" LAST-CHANGE="2020-10-17T10:00:00+01:00">
                                    <OBJECT>
                                        <SPEC-OBJECT-REF>Req-2b9016e2872e78ecadc50feddc0013Ac</SPEC-OBJECT-REF>
                                    </OBJECT>
                                </SPEC-HIERARCHY>
                            </CHILDREN>
                        </SPEC-HIERARCHY>
                        <SPEC-HIERARCHY IDENTIFIER="N-Folder-SystemModel" LONG-NAME="" LAST-CHANGE="2020-10-17T10:00:00+01:00">
                            <OBJECT>
                                <SPEC-OBJECT-REF>Folder-SystemModel</SPEC-OBJECT-REF>
                            </OBJECT>
                            <CHILDREN>
                                <SPEC-HIERARCHY IDENTIFIER="N-Diagram-aec0df7900010000017001eaf53e8876" LONG-NAME="" LAST-CHANGE="2020-10-17T10:00:00+01:00">
                                    <OBJECT>
                                        <SPEC-OBJECT-REF>Diagram-aec0df7900010000017001eaf53e8876</SPEC-OBJECT-REF>
                                    </OBJECT>
                                    <CHILDREN>
                                        <SPEC-HIERARCHY IDENTIFIER="N-50fbfe8f0029b1a8016ea86245a9d83a" LONG-NAME="" LAST-CHANGE="2020-03-06T09:05:00+01:00">
                                            <OBJECT>
                                                <SPEC-OBJECT-REF>MEl-50fbfe8f0029b1a8016ea86245a9d83a</SPEC-OBJECT-REF>
                                            </OBJECT>
                                        </SPEC-HIERARCHY>
                                        <SPEC-HIERARCHY IDENTIFIER="N-50feddc00029b1a8016e2872e78ecadc" LONG-NAME="" LAST-CHANGE="2020-03-06T09:05:00+01:00">
                                            <OBJECT>
                                                <SPEC-OBJECT-REF>MEl-50feddc00029b1a8016e2872e78ecadc</SPEC-OBJECT-REF>
                                            </OBJECT>
                                        </SPEC-HIERARCHY>
                                    </CHILDREN>
                                </SPEC-HIERARCHY>
                            </CHILDREN>
                        </SPEC-HIERARCHY>
                    </CHILDREN>
                </SPECIFICATION>
            </SPECIFICATIONS>
            <SPEC-RELATION-GROUPS></SPEC-RELATION-GROUPS>
        </REQ-IF-CONTENT>
    </CORE-CONTENT>
    <TOOL-EXTENSIONS></TOOL-EXTENSIONS>
</REQ-IF>
```


You may also download the example [Very Simple Model with Requirements using ReqIF](http://specif.de/examples/09_Very-Simple-Model-FMC-with-Requirements_PNG.reqifz).
