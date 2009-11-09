
DeepaMehta 3 Poemspace Application
==================================

*Poemspace* is an application for contact management and email distribution in the field of arts and culture.
Contacts (ie. persons or institutions) are assigned to one or more distribution lists.
A mailing is addressed to an arbitrary combination of single contacts and distribution lists.
Contacts are categorized by e.g. arts genre and kind of venue.
The categories themself are configurable by the user.

Technically, the *Poemspace* application is a plugin for the DeepaMehta 3 platform.
It makes use of DeepaMehta workspaces (as provided by the *DM3 Workspaces* plugin) to represent distribution lists.
It extends the *Contact* topic type (as provided by the *DM3 Contacts* plugin) by an arts and culture category system.


Requirements
------------

*   A DeepaMehta 3 installation  
    <http://github.com/jri/deepamehta3>

*   3 DeepaMehta plugins  
    - DM3 Contacts   (<http://github.com/jri/dm3-contacts>)  
    - DM3 Email      (<http://github.com/jri/dm3-email>)  
    - DM3 Workspaces (<http://github.com/jri/dm3-workspaces>)  

*   1 CouchDB extension  
    - CouchDB Mailer (<http://github.com/jri/couchdb-mailer>)


Installation
------------

1.  Go to your DeepaMehta 3 installation directory:
        cd deepamehta3

2.  Download the *Poemspace* Application:
        couchapp vendor install git://github.com/jri/dm3-poemspace-app.git

3.  Activate the application by inserting this line to DeepaMehta's `_attachments/javascript/plugins.js`:
        add_plugin("vendor/dm3-poemspace-app/script/dm3_poemspace.js")

4.  Install the required DeepaMehta plugins and the CouchDB extension (see Requirements) as described on the respective pages.

5.  Upload changes to CouchDB:
        couchapp push --atomic http://localhost:5984/deepamehta3-db


Usage
-----

1.  Visit DeepaMehta 3 in your webbrowser (resp. press reload):
        http://localhost:5984/deepamehta3-db/_design/deepamehta3/index.html

2.  Create contacts and assign them to workspaces.

3.  Create an email and address it by entering the name of a contact or a workspace in the *To*, *Cc*, or *Bcc* fields.
    Each field can hold an arbitrary number of addressees.
    After typing some letters DeepaMehta suggests matching contacts or workspaces by means of a menu (autocompletion feature).
    If an email is addressed to a workspace it is send to every contact assigned to that workspace.

4.  In order to attach files to the email you must save it first (by clicking *Save as draft*), then upload the attachments
    (by clicking the *Upload Attachment* button), and return to edit mode (by clicking the *Edit* button).
    Note: this save-edit-detour is bad usability and will vanish in the future.

5.  To send the email click the *Send* button.



------------
Jörg Richter  
Nov 9, 2009
