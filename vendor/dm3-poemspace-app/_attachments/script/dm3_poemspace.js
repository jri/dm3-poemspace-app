function dm3_poemspace() {
    
    this.init = function() {
        //
        // add 4 topic types
        //
        types["Bezirk"] = {
            fields: [
                {id: "Name",        model: {type: "text"}, view: {editor: "single line"}, content: ""},
                {id: "Description", model: {type: "text"}, view: {editor: "multi line"},  content: ""}
            ],
            view: {icon_src: "vendor/dm3-poemspace-app/images/circled-dot.png"},
            implementation: "PlainDocument"
        }
        types["Kiez"] = {
            fields: [
                {id: "Name",        model: {type: "text"}, view: {editor: "single line"}, content: ""},
                {id: "Description", model: {type: "text"}, view: {editor: "multi line"},  content: ""}
            ],
            view: {icon_src: "vendor/dm3-poemspace-app/images/dot.png"},
            implementation: "PlainDocument"
        }
        types["Einrichtungsart"] = {
            fields: [
                {id: "Name",        model: {type: "text"}, view: {editor: "single line"}, content: ""},
                {id: "Description", model: {type: "text"}, view: {editor: "multi line"},  content: ""}
            ],
            view: {icon_src: "vendor/dm3-poemspace-app/images/tent.png"},
            implementation: "PlainDocument"
        }
        types["Kunstgattung"] = {
            fields: [
                {id: "Name",        model: {type: "text"}, view: {editor: "single line"}, content: ""},
                {id: "Description", model: {type: "text"}, view: {editor: "multi line"},  content: ""}
            ],
            view: {icon_src: "vendor/dm3-poemspace-app/images/butterfly.png"},
            implementation: "PlainDocument"
        }
        //
        // extend topic type "Contact" by 4 fields
        //
        types["Contact"].fields.push(
            {id: "Bezirk",          model: {type: "relation", related_type: "Bezirk"},          view: {editor: "checkboxes"}}
        )
        types["Contact"].fields.push(
            {id: "Kiez",            model: {type: "relation", related_type: "Kiez"},            view: {editor: "checkboxes"}}
        )
        types["Contact"].fields.push(
            {id: "Einrichtungsart", model: {type: "relation", related_type: "Einrichtungsart"}, view: {editor: "checkboxes"}}
        )
        types["Contact"].fields.push(
            {id: "Kunstgattung",    model: {type: "relation", related_type: "Kunstgattung"},    view: {editor: "checkboxes"}}
        )
    }
}
