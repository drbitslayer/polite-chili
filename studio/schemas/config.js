export default {
    "type": "document",
    "name": "config",
    "title": "Global Site Config",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "Site title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "baseURL",
            "title": "Base URL",
            "description": "Hostname (and path) to the root",
            "hidden": true,
            "validation": null
        },
        {
            "type": "object",
            "name": "params",
            "title": "Params",
            "description": "Site parameters",
            "validation": Rule => Rule.required(),
            "fields": [
                {
                    "type": "string",
                    "name": "palette",
                    "title": "Color Palette",
                    "description": "The color palette of the theme.",
                    "initialValue": "yellow",
                    "validation": null,
                    "options": {
                        "list": [
                            "yellow",
                            "blue",
                            "green",
                            "red"
                        ]
                    }
                },
                {
                    "type": "object",
                    "name": "header",
                    "title": "Header Configuration",
                    "validation": null,
                    "fields": [
                        {
                            "type": "string",
                            "name": "title",
                            "title": "Header Title",
                            "description": "The title displayed on the left side if no logo image added. If value is not set, the author name will be used.",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "tagline",
                            "title": "Header Tagline",
                            "description": "The tagline displayed on the left side.",
                            "validation": null
                        },
                        {
                            "type": "image",
                            "name": "logo_img",
                            "title": "Logo",
                            "description": "The logo image displayed on the left side.",
                            "validation": null
                        },
                        {
                            "type": "image",
                            "name": "bg_img",
                            "title": "Background Image",
                            "description": "The background image displayed on the left side.",
                            "validation": null
                        },
                        {
                            "type": "boolean",
                            "name": "has_nav",
                            "title": "Enable Navigation Menu",
                            "description": "Display the navigation menu bar on the left side.",
                            "initialValue": true,
                            "validation": null
                        },
                        {
                            "type": "boolean",
                            "name": "has_social",
                            "title": "Enable Social Links",
                            "description": "Display social links on the left side.",
                            "initialValue": true,
                            "validation": null
                        }
                    ]
                },
                {
                    "type": "object",
                    "name": "footer",
                    "title": "Footer Configuration",
                    "validation": null,
                    "fields": [
                        {
                            "type": "string",
                            "name": "content",
                            "title": "Footer Content",
                            "description": "The copyright text displayed in the footer.",
                            "validation": null
                        },
                        {
                            "type": "array",
                            "name": "links",
                            "title": "Links",
                            "description": "A list of links displayed in the footer.",
                            "validation": null,
                            "of": [
                                {
                                    "type": "object",
                                    "fields": [
                                        {
                                            "type": "string",
                                            "name": "text",
                                            "title": "Link text",
                                            "validation": null
                                        },
                                        {
                                            "type": "string",
                                            "name": "url",
                                            "title": "URL",
                                            "validation": null
                                        },
                                        {
                                            "type": "boolean",
                                            "name": "new_window",
                                            "title": "Open in new window",
                                            "initialValue": true,
                                            "validation": null
                                        }
                                    ],
                                    "preview": {
                                        "select": {
                                            "title": "text"
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "type": "site_menus",
            "name": "menu",
            "title": "Site Menus",
            "description": "Menu items not related to a specific page",
            "validation": null
        },
        {
            "type": "array",
            "name": "disableKinds",
            "title": "Disable Kinds",
            "description": "Enable disabling of all pages of the specified Kinds.",
            "hidden": true,
            "validation": null,
            "of": [
                {
                    "type": "string"
                }
            ],
            "options": {
                "list": [
                    "page",
                    "home",
                    "section",
                    "taxonomy",
                    "taxonomyTerm",
                    "RSS",
                    "sitemap",
                    "robotsTXT",
                    "404"
                ]
            }
        },
        {
            "type": "boolean",
            "name": "uglyURLs",
            "title": "Ugly URLs",
            "description": "When enabled, creates URL of the form /filename.html instead of /filename/.",
            "hidden": true,
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Config File Path",
            "description": "The file path of the configuration file",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "config.yaml"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "config"
                ]
            }
        }
    ],
    "singleInstance": true
}