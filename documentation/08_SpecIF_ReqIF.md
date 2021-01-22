
# SpecIF-ReqIF Documentation

Transforming SpecIF to ReqIF is bidirectional. Files can be exported and imported back and forth without losing any data.

Note that there are SpecIF-Attributes which don't have a ReqIF equivalent yet, such as "revisions", "replaces" and "alternativeIds".  A way to utilize those attributes is creating an additional ATTRIBUTE-DEFINITION in ReqIF.

# Datatypes

## Strings

| SpecIF	| ReqIF  |
|  -  | - |
| id  | IDENTIFIER
| changedAt | LAST-CHANGE
| title | LONG-NAME
| description | DESC
| type: xs string | REQIF:DATATYPE-DEFINITION-STRING
|maxLength | MAX-LENGTH

## Boolean

| SpecIF	| ReqIF  |
|  -  | - |
| id  | IDENTIFIER
| title | LONG-NAME
| description | DESC
| type: xs:boolean | DATATYPE-DEFINITION-BOOLEAN
| changedAt | LAST-CHANGE


## Byte

 | SpecIF	| ReqIF  |
|  -  | - |
| id  | IDENTIFIER
| title | LONG-NAME
| description | DESC
| type: xs:integer | DATATYPE-DEFINITION-INTEGER
| minInclusive | MIN
| maxInclusive | MAX
| changedAt | LAST-CHANGE

## Integer 

 | SpecIF	| ReqIF  |
|  -  | - |
| id  | IDENTIFIER
| title | LONG-NAME
| description | DESC
| type: xs:integer | DATATYPE-DEFINITION-INTEGER
| minInclusive | MIN
| maxInclusive | MAX
| changedAt | LAST-CHANGE

## Real

 | SpecIF	| ReqIF  |
|  -  | - |
| id  | IDENTIFIER
| title | LONG-NAME
| description | DESC
| changedAt | LAST-CHANGE
| type: xs:double | DATATYPE-DEFINITION-REAL
| maxInclusive | MAX
| minInclusive | MIN
| fractionDigits | ACCURACY

## Date

 | SpecIF	| ReqIF  |
|  -  | - |
| id  | IDENTIFIER
| title | LONG-NAME
| description | DESC
| changedAt | LAST-CHANGE
| type: xs:dateTime | DATATYPE-DEFINITION-DATE

## XHTML
 | SpecIF	| ReqIF  |
|  -  | - |
| id  | IDENTIFIER
| title | LONG-NAME
| description | DESC
| changedAt | LAST-CHANGE
|type: xhtml | DATATYPE-DEFINITION-XHTML

## Enumeration

 | SpecIF	| ReqIF  |
|  -  | - |
| id  | IDENTIFIER
| title | LONG-NAME
| description | DESC
|type: xs:enumeration | DATATYPE-DEFINITION-ENUMERATION
| values[] | ENUM-VALUE
| changedAt | LAST-CHANGE

Example for values in SpecIF:

```
"values":[
   {
      "id":"V-Status-0",
      "value":"00_deprecated"
   }
]
```
 Example in ReqIF:
```
<ENUM-VALUE IDENTIFIER="V-Status-0" LONG-NAME="00_deprecated" LAST-CHANGE="2016-05-26T08:59:00+02:00">
	<PROPERTIES>
		<EMBEDDED-VALUE KEY="0" OTHER-CONTENT=""/>
	</PROPERTIES>
</ENUM-VALUE>
```

Redundant data in this example like LAST-CHANGE is deduplicated by SpecIF.


---

# SpecIF schema attributes

SpecIF has propertyClasses that can be used by all resourceClasses and statementClasses, while in ReqIF they have to be defined anew for each OBJECT-TYPE and RELATION-TYPE.

SpecIF has no equivalent for SPECIFICATION-TYPES, instead a normal resource is used as root.

## resourceClasses

 | SpecIF	| ReqIF  |
|  -  | - |
| id  | IDENTIFIER
| title | LONG-NAME
| description | DESC
| propertyClasses[] | 
| changedAt | LAST-CHANGE

resourceClass example:

in SpecIF:
```
"resourceClasses": [
		{
			"id": "RC-Fld",
			"title": "SpecIF:Heading",
			"description": "Folders with title and text for chapters or descriptive paragraphs.",
			"propertyClasses": [
				"RC-2138659171",
				"RC-2138842117"
			],
			"changedAt": "2016-05-26T08:59:00+02:00"
		}
	]
```

in ReqIF:
``` 
<SPEC-OBJECT-TYPE IDENTIFIER="RC-Fld" LONG-NAME="SpecIF:Heading" DESC="Folders with title and text for chapters or descriptive paragraphs." LAST-CHANGE="2016-05-26T08:59:00+02:00">
	<SPEC-ATTRIBUTES>
		<ATTRIBUTE-DEFINITION-STRING IDENTIFIER="RC-2138659171" LONG-NAME="ReqIF.Name" LAST-CHANGE="2016-05-26T08:59:00+02:00">
			<TYPE>
				<DATATYPE-DEFINITION-STRING-REF>DT-ShortString</DATATYPE-DEFINITION-STRING-REF>
			</TYPE>
		</ATTRIBUTE-DEFINITION-STRING>
		<ATTRIBUTE-DEFINITION-XHTML IDENTIFIER="RC-2138842117" LONG-NAME="ReqIF.Text" LAST-CHANGE="2016-05-26T08:59:00+02:00">
			<TYPE>
				<DATATYPE-DEFINITION-XHTML-REF>DT-FormattedText</DATATYPE-DEFINITION-XHTML-REF>
			</TYPE>
		</ATTRIBUTE-DEFINITION-XHTML>
	</SPEC-ATTRIBUTES>
</SPEC-OBJECT-TYPE
```
Redundant data is like LAST-CHANGE is deduplicated

## statementClasses

 | SpecIF	| ReqIF  |
|  -  | - |
| id  | IDENTIFIER
| title | LONG-NAME
| description | DESC
| propertyClasses[] | 
| changedAt | LAST-CHANGE

statementClass example:

in SpecIF:

```
	"statementClasses": [
		{
			"id": "SC-Visibility",
			"title": "SpecIF:shows",
			"description": "Relation: Plan shows Model-Element",
			"changedAt": "2016-05-26T08:59:00+02:00"
		}
	]
```


in ReqIF:

```
<SPEC-RELATION-TYPE IDENTIFIER="SC-Visibility" LONG-NAME="SpecIF:shows" DESC="Relation: Plan shows Model-Element" LAST-CHANGE="2016-05-26T08:59:00+02:00">
	<SPEC-ATTRIBUTES>
		<ATTRIBUTE-DEFINITION-STRING IDENTIFIER="RC--669466474" LONG-NAME="ReqIF.Name" LAST-CHANGE="2016-05-26T08:59:00+02:00">
			<TYPE>
				<DATATYPE-DEFINITION-STRING-REF>DT-ShortString</DATATYPE-DEFINITION-STRING-REF>
			</TYPE>
		</ATTRIBUTE-DEFINITION-STRING>
	</SPEC-ATTRIBUTES>
</SPEC-RELATION-TYPE>
```

## resources

 | SpecIF	| ReqIF  |
|  -  | - |
| id  | IDENTIFIER
| title | LONG-NAME
| class | SPEC-OBJECT-TYPE-REF
| description | DESC
| properties[] | VALUES
| changedAt | LAST-CHANGE

resources example:

in SpecIF:
```
"resources": [
		{
			"id": "Req-5ba3512b0000bca",
			"title": "Minimum button size",
			"class": "RC-Requirement",
			"properties": [
				{
					"class": "RC--1446161954",
					"value": "Minimum button size"
				},
				{
					"class": "RC-1814911305",
					"value": "\n                        <xhtml:div xmlns:xhtml=\"http://www.w3.org/1999/xhtml\">\n                           <xhtml:p>\n                              The\n                              <xhtml:i>button size</xhtml:i>\n                              MUST not be less than 20mm in diameter.\n                           </xhtml:p>\n                           <xhtml:p>\n                              <xhtml:object data=\"images/button-diameter.png\" type=\"image/png\">Diameter in different Forms</xhtml:object>\n                           </xhtml:p>\n                        </xhtml:div>\n                     "
				}
			],
			"changedAt": "2017-06-19T20:13:08+02:00"
		}
	]
```
in ReqIF:
```
<SPEC-OBJECT IDENTIFIER="Req-5ba3512b0000bca" LONG-NAME="Minimum button size" DESC="" LAST-CHANGE="2017-06-19T20:13:08+02:00">
	<TYPE>
		<SPEC-OBJECT-TYPE-REF>RC-Requirement</SPEC-OBJECT-TYPE-REF>
	</TYPE>
	<VALUES>
		<ATTRIBUTE-VALUE-STRING THE-VALUE="Minimum button size">
			<DEFINITION>
				<ATTRIBUTE-DEFINITION-STRING-REF>RC--1446161954</ATTRIBUTE-DEFINITION-STRING-REF>
			</DEFINITION>
		</ATTRIBUTE-VALUE-STRING>
		<ATTRIBUTE-VALUE-XHTML>
			<DEFINITION>
				<ATTRIBUTE-DEFINITION-XHTML-REF>RC-1814911305</ATTRIBUTE-DEFINITION-XHTML-REF>
			</DEFINITION>
			<THE-VALUE>
				<xhtml:div>
					<xhtml:p>The
						<xhtml:i>button size</xhtml:i>
						MUST not be less than 20mm in diameter.
					</xhtml:p>
					<xhtml:p>
						<xhtml:object data="images/button-diameter.png" type="image/png">Diameter in different Forms</xhtml:object>
					</xhtml:p>
				</xhtml:div>
			</THE-VALUE>
		</ATTRIBUTE-VALUE-XHTML>
	</VALUES>
</SPEC-OBJECT>
```

## statements

 | SpecIF	| ReqIF  |
|  -  | - |
| id  | IDENTIFIER
| title | LONG-NAME
| class | SPEC-RELATION-TYPE-REF
| description | DESC
| subject | SPEC-OBJECT-REF
| object | SPEC-OBJECT-REF
| changedAt | LAST-CHANGE


in SpecIF:
```
"statements": [
		{
			"id": "RVis-Pln-5a4755dd0000bca801375293a62c90a8-MEl-5bd6bd890000bca8013739588a3f43d6",
			"class": "SC-Visibility",
			"changedAt": "2017-06-19T20:13:33+02:00",
			"subject": "Pln-5a4755dd0000bca801375293a62c90a8",
			"object": "MEl-5bd6bd890000bca8013739588a3f43d6"
		}
	]
```

in ReqIF:

```
<SPEC-RELATION IDENTIFIER="RVis-Pln-5a4755dd0000bca801375293a62c90a8-MEl-5bd6bd890000bca8013739588a3f43d6" LONG-NAME="" DESC="" LAST-CHANGE="2017-06-19T20:13:33+02:00">
	<TYPE>
		<SPEC-RELATION-TYPE-REF>SC-Visibility</SPEC-RELATION-TYPE-REF>
	</TYPE>
	<VALUES>
		<ATTRIBUTE-VALUE-STRING THE-VALUE="SpecIF:shows">
			<DEFINITION>
				<ATTRIBUTE-DEFINITION-STRING-REF>RC--669466474</ATTRIBUTE-DEFINITION-STRING-REF>
			</DEFINITION>
		</ATTRIBUTE-VALUE-STRING>
	</VALUES>
	<SOURCE>
		<SPEC-OBJECT-REF>Pln-5a4755dd0000bca801375293a62c90a8</SPEC-OBJECT-REF>
	</SOURCE>
	<TARGET>
		<SPEC-OBJECT-REF>MEl-5bd6bd890000bca8013739588a3f43d6</SPEC-OBJECT-REF>
	</TARGET>
</SPEC-RELATION>

```

# hierarchies

 | SpecIF	| ReqIF  |
|  -  | - |
| id  | IDENTIFIER
| resource | SPEC-OBJECT-REF
| changedAt | LAST-CHANGE
| nodes[] | CHILDREN

Examples:

in SpecIF:

```

	"hierarchies": [
		{
			"id": "SH-Fld-5a5f54090000bca801375b04a668f1a7",
			"resource": "Fld-5a5f54090000bca801375b04a668f1a7",
			"changedAt": "2017-06-19T20:14:47+02:00",
			"nodes": [
				{
					"id": "SH-Pln-27420ffc0000c3a8013ab527ca1b71f5",
					"resource": "Pln-27420ffc0000c3a8013ab527ca1b71f5",
					"changedAt": "2017-06-19T20:14:47+02:00"
				},
				{
					"id": "SH-Pln-5a4755dd0000bca801375293a62c90a8",
					"resource": "Pln-5a4755dd0000bca801375293a62c90a8",
					"changedAt": "2017-06-19T20:14:47+02:00"
				},
				{
					"id": "SH-Pln-5a6cdea50000bca80137d6b2d6e8a3a0",
					"resource": "Pln-5a6cdea50000bca80137d6b2d6e8a3a0",
					"changedAt": "2017-06-19T20:14:47+02:00"
				},
				{
					"id": "SH-Pln-5a7f99af0000bca8013754f2ef12d3e5",
					"resource": "Pln-5a7f99af0000bca8013754f2ef12d3e5",
					"changedAt": "2017-06-19T20:14:47+02:00"
				}
			]
		}
```

in ReqIF:

```
<SPEC-HIERARCHY IDENTIFIER="SH-Fld-5a5f54090000bca801375b04a668f1a7" LONG-NAME="" LAST-CHANGE="2017-06-19T20:14:47+02:00">
	<OBJECT>
		<SPEC-OBJECT-REF>Fld-5a5f54090000bca801375b04a668f1a7</SPEC-OBJECT-REF>
	</OBJECT>
	<CHILDREN>
		<SPEC-HIERARCHY IDENTIFIER="SH-Pln-27420ffc0000c3a8013ab527ca1b71f5" LONG-NAME="" LAST-CHANGE="2017-06-19T20:14:47+02:00">
			<OBJECT>
				<SPEC-OBJECT-REF>Pln-27420ffc0000c3a8013ab527ca1b71f5</SPEC-OBJECT-REF>
			</OBJECT>
		</SPEC-HIERARCHY>
		<SPEC-HIERARCHY IDENTIFIER="SH-Pln-5a4755dd0000bca801375293a62c90a8" LONG-NAME="" LAST-CHANGE="2017-06-19T20:14:47+02:00">
			<OBJECT>
				<SPEC-OBJECT-REF>Pln-5a4755dd0000bca801375293a62c90a8</SPEC-OBJECT-REF>
			</OBJECT>
		</SPEC-HIERARCHY>
		<SPEC-HIERARCHY IDENTIFIER="SH-Pln-5a6cdea50000bca80137d6b2d6e8a3a0" LONG-NAME="" LAST-CHANGE="2017-06-19T20:14:47+02:00">
			<OBJECT>
				<SPEC-OBJECT-REF>Pln-5a6cdea50000bca80137d6b2d6e8a3a0</SPEC-OBJECT-REF>
			</OBJECT>
		</SPEC-HIERARCHY>
		<SPEC-HIERARCHY IDENTIFIER="SH-Pln-5a7f99af0000bca8013754f2ef12d3e5" LONG-NAME="" LAST-CHANGE="2017-06-19T20:14:47+02:00">
			<OBJECT>
				<SPEC-OBJECT-REF>Pln-5a7f99af0000bca8013754f2ef12d3e5</SPEC-OBJECT-REF>
			</OBJECT>
		</SPEC-HIERARCHY>
	</CHILDREN>
</SPEC-HIERARCHY>
```

---