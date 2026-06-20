const blogs = [
  {
    id: 1,
    title: "Things Every ServiceNow Developer Must Know",
    slug: "Things-Every-ServiceNow-Developer-Must-Know",
    description: `Things Every ServiceNow Developer Must Know :

 

1)gr.setUseEngines(false) 

: It prevents workflows, business rules, data policies, and email notifications from firing for the current GlideRecord action (insert, update, delete).ServiceNow GlideRecord API method used in server-side scripts to temporarily disable internal processing engines

Eg.

var gr = new GlideRecord('incident');
gr.get('sys_id_of_incident'); // Or query for records

gr.setUseEngines(false); // Disable engines for this operation
gr.comments = 'System update, no notification';
gr.update(); // Update happens without triggering notifications or policies
gr.setUseEngines(true); // Re-enable engines

 

2)g_form.getEditableFields()

undocumented client-side API in ServiceNow that returns an array of the names (field names) of all fields currently editable (not read-only) on the form. 

Making a complete form read-only: You can retrieve all editable fields and then loop through the array to set each one to read-only.

var fields = g_form.getEditableFields();
for (var i = 0; i < fields.length; i++) {
g_form.setReadOnly(fields[i], true);
}

 

3)Data types :

FieldName :The Field Name field type stores the column name (technical name) of a specific field from a selected table. 

TableName ;The Table Name field type stores the name of a specific table within the ServiceNow instance (e.g., incident, cmn_location, sys_user). 

It is typically used in conjunction with a Table Name field, where the available fields in the Field Name dropdown are dependent on the table selected in the Table Name field. This allows dynamic configuration of which fields to reference, for example, in report filters or integration mappings

 

adityahubli_0-1767717003374.png   

adityahubli_1-1767717095422.png

 

4)How to delete/update bulk data without scripting :

For bulk record deleting there is OOTB option that is Data management .

 Go to target table => filter out data which you want to delete ( apply OOTB filter functionality) =>Right click => In Context Menu => click on Data management => Delete with delete preview  => cascade preview => execute now ( from related links) => wait filtered out records will get deleted

 

Screenshot (1153).png

 

 update bulk records by Data management  .

Go to target table => filter out data which you want to delete ( apply OOTB filter functionality) =>Right click => In Context Menu => click on Data management => click on Update with all preview => open another forms, enter the fields value which you want to update => save form => then there is execute now related link , click it => All filtered out records will get updated.

 

Screenshot (1155).pngScreenshot (1154).png

 

 

5)Different roles required  for servicenow scripting :

client script : client_script-admin

Business Rule :business_rule_admin

fix  script : script_fix_admin

ui action : ui_action_admin

script include : script_include_admin

schedule job : schedule_admin

 

This list very useful for interviews, real projects, and best practices :grinning_face: `,
    image:
      "https://devtools.in/wp-content/uploads/2025/11/servicenow-1024x576.jpg",
    author: "Admin",
    category: "Technology",
    views: 1200,
    publishDate: "2026-06-18",
    status: "published",
  },

  {
    id: 2,
    title: "Incident management",
    slug: "incident-management",
    description: `Hi community ,

 

This article explains everything you must know about Incident Management, including: what is an incident, what is incident management in ServiceNow, why, where, who and for whom it is used, ways to perform incident management, users involved in incident management, states and lifecycle of incident management, components of incident management such as incident task, child incidents, related problem, related change, and what is a major incident — all covered in this one single article.

 

What is incident ?

 

An incident is an unplanned interruption in a service or a reduction in the quality of a service.

In simple words, any issue faced while accessing or using a service is called an incident.

Examples:
Server is down

Internet network is not working

Internet speed is reduced

When users face such issues, they contact the customer service center or service desk team to restore the affected service as soon as possible.

 

 

What is incident management ?
Incident management is the process of identifying, logging, classifying, prioritizing, and assigning incidents to the appropriate user or group so that they can be resolved quickly.

Main purpose of Incident Management:
The main purpose of incident management is to restore service as soon as possible.

During the incident management process:

Users can track the issue until it is resolved

Each incident record stores tasks and important information

Incidents are assigned to the right person or group

Investigation and resolution details are documented

Why incident Management is used ?
Incident management is used to:

Restore services quickly

Reduce business impact

Track issues from start to end

Ensure proper resolution and communication

Where is Incident Management used?
Incident management is used in:

IT services

ServiceNow platform

Organizations that provide services to users

Service desk operations

Personas that invoved in incident management

1️)End User – Reports the incident and confirms resolution.
2️)Service Desk User – Logs, prioritizes, and resolves or escalates incidents.
3️)ITIL User – Governs the incident process and ensures SLA compliance.

 

Ways to Create incident By End User :

  Service Portal – User submits an incident using an online portal form.

  Self-Service – User creates an incident from the self-service catalog.

  Email – Incident is created by sending an email to the support mailbox.

  Phone Call – Service desk logs the incident on behalf of the user.

  Chat / Virtual Agent – Incident is raised via chatbot or live chat.

 

adityahubli_0-1769100795273.png

 

 

Service Desk User/Itil Users can work on incident by 2 different ways as mentioned in above picture :

  SOW (Service Operations Workspace) – Centralized workspace for agents and ITIL users to manage, prioritize, and resolve incidents efficiently.

  Native UI – Classic ServiceNow interface used to create, update, assign, and close incidents and manage ITSM processes.

 

First we will discuss about what are incident management states in servicenow

Incident State

Short Description

New

Incident is logged but work has not started yet.

In Progress

Incident is assigned and actively being worked on.

On Hold

Work is paused (waiting for user, vendor, or more info).

Resolved

Issue is fixed; waiting for user confirmation.

Closed

Incident is completed and formally closed.

Canceled

Incident is no longer required or was created by mistake.

 Common On Hold reasons (sub-status)

Awaiting User – Waiting for response from the requester
Awaiting Vendor – Waiting for third-party support
Awaiting Change – Fix depends on a change request
adityahubli_1-1769100795694.png

 

 

What is Incident Management Lifecycle : The Incident Management Lifecycle is a structured process used in IT Service Management (ITSM) to restore normal service as quickly as possible and minimize business impact.

 

adityahubli_2-1769100795522.png

 

 

How End User Create incident through service Portal :

adityahubli_3-1769100795691.png

 

 

Incident Creation by end User using Native Ui :

 

adityahubli_4-1769100795373.png

 

         

 

adityahubli_6-1769100795389.png

 

 

 

 

 

After that Incident were created in incident table then service desk team will start working on it either using SOW/Native Ui :

 

adityahubli_7-1769100795291.png

 

 

adityahubli_8-1769100795715.png

 

 

How Incident Management Works in ServiceNow
1. Incident Reporting
End user reports the issue via:
Self-Service Portal
Virtual Agent
Service Desk Team
Incident can also be created manually if received through email / phone / SMS.
2. Incident Identification
If the issue is identified as an incident, it is moved to the incident process.
If it is not really an incident, it is treated as a request.
3. Logging the Incident
Service desk logs all relevant information such as:
Caller
Short description
Description of the issue
Business service
CI (Configuration Item)
Contact information
4. Categorization
Incident is categorized as per defined service categories.
Each category must have at least one sub-category.
5. Prioritization
Incident is prioritized based on:
Impact on users or business
Urgency
Based on priority, SLA response will be handled.
6. Assignment
Incident is assigned to an assignment group or team member to resolve the issue.
Assignment can be done in two ways:
Manually by Service Desk Team
Automatically via Assignment Rules
7. Investigation & Diagnosis
Assigned ITIL user investigates the root cause.
Updates work notes.
Collaborates with other teams if required.
8. Resolution
Incident Manager or assigned team:
Implements the fix
Restores the service
9. Closure
End user or service desk:
Verifies the solution
Closes the ticket
When ever service desk / Itil user closes incident he must have to fill close notes,close code
(There is one data policy which must enforce this during state changes to closed state)

 

10. Monitoring & Reporting
Incident Manager:
Monitors incidents
Analyzes trends
Improves future handling

 

Roles Required for incident management
ITIL 
Create, update, assign, and resolve incidents
Access other ITSM modules
sn_incident_read
End users
Can view their own incidents in the portal
sn_incident_write
Service desk agent
Can create and update incidents
itil_admin
Senior support role
Advanced incident management
Reassignment and SLA configuration
Workspace User
Service desk users working in Service Operations Workspace.
Access to a modern interface for handling incidents.
Admin
System Administrator
Full access to:
All modules
Configuration
Setup
Incident Manager
Oversees and manages all incidents
Views dashboards
Performs bulk actions
Monitors trends
 

What is child incident,Incident task ?

 

Child Incident
What is a Child Incident?
A child incident is a separate incident that is linked to a parent incident.
It is usually created when multiple users are affected by the same issue.
Why do we use Child Incidents?
To manage large-scale or repeated incidents efficiently.
To avoid duplicate work.
To keep communication and resolution consistent.
Example:
Company email server is down.
20 employees raise incidents saying “Email not working”.
Instead of handling 20 incidents separately:
Create one parent incident → Email server is down
Link all 20 tickets as child incidents to the parent.
Benefit:
When the parent incident is resolved, all child incidents are automatically resolved with the same solution.
adityahubli_9-1769100795733.png

 

 

Incident Tasks
What is an Incident Task?
An incident task is a smaller piece of work created to complete part of the incident resolution.
Why are Incident Tasks used?
When multiple teams or people are required to work on one incident.
Example:
Issue: User cannot print.
Service desk creates two tasks:
Network Team – Check printer connectivity
Hardware Team – Check printer device
Once all tasks are completed, the main incident can be resolved.
 

 

What is Major Incident ?

major incidents

incident with highest impact, highest urgency incident that affect large number of users, negatively impact on crucial service. Given urgency of situation, well coordinated response required to resolve and minimize business impact. require immediate attention and resolution.
To Enable Major Incident Management in PDI must installed :

Plugin – major incident Management
Download

Role – major incident manager
There is All → Administration – majorincident management ->trigger rules → (to create majorincident)
 

ways – create major incident candidate
→ urgent action.

incident → service desk / itil user → propose MI
↓
major incident manager
↓
review all criteria for mi

once confirm
promote it as MI

 

(in below tab we got MI tab)
form → propose inc as mi by clicking
propose mi from context menu.

application Nav → create mi candidate
MI trigger rules → App Nav.

Lead service desk Agent → propose MI
context menu on incident → mi manager
form → promote to mi -> Automaticall Assignment Group set to Major Incident Management

 

 

1) identification & proposal – propose incident as
urgency & impact (u), userbase,

2) communication & collaboration

contact with stakeholders/users – co-ordinate
(email, message)
resolution efforts to keep updated
3) Resolution

to restore service
4) create Problem record (created from MI)

copy major incident data into Problem
5) post incident review (report)

create reports for stakeholders to analyze
previous, download, established for future
then.
Conclusion
Incident Management in ServiceNow plays a critical role in ensuring that service disruptions are handled in a structured, efficient, and timely manner. By clearly defining what an incident is, how it is logged, prioritized, assigned, and resolved, organizations can restore services quickly while minimizing business impact. The involvement of different personas such as end users, service desk users, and ITIL users ensures proper coordination and accountability throughout the incident lifecycle. Components like incident tasks, child incidents, related problems, and related changes help manage complex issues effectively, while major incident management provides a focused and well-coordinated approach for high-impact and high-urgency situations. Overall, Incident Management in ServiceNow helps organizations maintain service quality, improve user satisfaction, and continuously enhance their IT service operations.

 

Please let me know anything is missing or mistake in this article `,
    image:
      " https://www.motadata.com/storage/blog/blog-content-images/incident-management-workflow-1-1.png",
    author: "Admin",
    category: "Technology",
    views: 890,
    publishDate: "2026-06-18",
    status: "published",
  },

  {
    id: 3,
    title: "How to Improve Productivity",
    slug: "how-to-improve-productivity",
    description:
      "Simple habits and techniques to improve your daily productivity.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    author: "Admin",
    category: "Lifestyle",
    views: 650,
    publishDate: "2026-06-18",
    status: "published",
  },

  {
    id: 4,
    title: "Servicenow Scripting Interview Questions",
    slug: "servicenow-scripting-interview-questions",
    description: `# GlideRecord / Server-Side Scripting

How to create user account using script?
<br>
How to create group using script?
<br>
How to add permissions to user/group using script?
<br>
How to add/remove group members using script?
<br>
How to create incident record using script?
<br>
How to create problem record using script?
<br>
How to create change request using script?
<br>
What is GlideRecord?
<br>
Difference between GlideRecord and GlideRecordSecure?
<br>
How to update records using script?
<br>
How to delete records using script?
<br>
What is initialize() vs newRecord()?
<br>
What is get() method in GlideRecord?
<br>
What is getRefRecord()?
<br>
What is setWorkflow(false)?
<br>
What is setForceUpdate()?
<br>
What is autoSysFields(false)?
<br>
How to get row count using script?
<br>
What is addEncodedQuery()?
<br>
How to fetch last 5 incidents using script?
<br>
How to identify duplicate records using script?
<br>
<br>

# Business Rule Scripting Questions
<br>
Logic to close child incidents when parent closes
<br>
Prevent incident closure if tasks are open
<br>
Close incidents when problem closes
<br>
Difference between After BR and Async BR
<br>
When Business Rule runs (Before, After, Async, Display)
<br>
How to stop processing in Before Business Rule?
<br>
Can we use current.update() in Before BR?
<br>
What is Display Business Rule?
<br>
How to check field changes using script?
<br>
<br>
 

# Client Script / g_form / g_user Questions
<br>
What are client scripts and types?
<br>
OnChange script parameters?
<br>
How to stop form submission?
<br>
GlideForm API methods?
<br>
GlideUser API methods?
<br>
Difference between setVisible vs setDisplay
<br>
Script to hide all sections
<br>
Script to make fields read-only
<br>
Script to hide related lists
<br>
Script to make attachment mandatory
<br>
<br>
 

# GlideAjax / Client-Server Scripting
<br>
What is GlideAjax?
<br>
GlideAjax syntax?
<br>
Types of GlideAjax (Async vs Sync)
<br>
Difference between getXML vs getXMLWait
<br>
How to pass parameters using sysparm_name?
<br><br>
 

# UI Page / UI Action / Jelly Scripting
<br>
How to call UI Pages using GlideModal?
<br>
How to pass values to UI Page?
<br>
Processing Script in UI Page?
<br>
How to close UI Page using script?
<br>
How to call UI Macro?
<br>
gsftSubmit() usage?`,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    author: "Admin",
    category: "Tutorials",
    views: 1500,
    publishDate: "2026-06-18",
    status: "published",
  },
];

export default blogs;
