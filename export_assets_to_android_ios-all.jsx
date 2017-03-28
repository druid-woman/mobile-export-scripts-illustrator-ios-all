/**
* Author: austynmahoney (https://github.com/austynmahoney)
*
* Copyright 2016 Austyn Mahoney
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var selectedExportOptions = {};

var androidExportOptions = [

    // Based on a base size image of
    // 1024 x 1024 pixels
    {
        name: "mdpi",
        scaleFactor: 50,
        type: "android"
    },
    {
        name: "hdpi",
        scaleFactor: 75,
        type: "android"
    },
    {
        name: "xhdpi",
        scaleFactor: 100,
        type: "android"
    },
    {
        name: "xxhdpi",
        scaleFactor: 150,
        type: "android"
    },
    {
        name: "xxxhdpi",
        scaleFactor: 200,
        type: "android"
    }
];

var iosExportOptions = [

    // Based on a base size image of
    // 1024 x 1024 pixels

    // iOS MOST RECENT

    {
        name: "Icon-60@2x",
        scaleFactor: 11.7,
        type: "ios"
    },
    {
        name: "Icon-60@3x",
        scaleFactor: 17.6,
        type: "ios"
    },
    {
        name: "Icon-76",
        scaleFactor: 7.42,
        type: "ios"
    },
    {
        name: "Icon-76@2",
        scaleFactor: 14.8,
        type: "ios"
    },
    {
        name: "Icon-76@2x",
        scaleFactor: 14.8,
        type: "ios"
    },
    {
        name: "Icon-83.5@2x",
        scaleFactor: 16.3,
        type: "ios"
    },
    {
        name: "Icon-Small-40",
        scaleFactor: 3.9,
        type: "ios"
    },
    {
        name: "Icon-Small-40@2x",
        scaleFactor: 7.81,
        type: "ios"
    },
    {
        name: "Icon-Small-40@3x",
        scaleFactor: 11.7,
        type: "ios"
    },
    {
        name: "Icon-Small",
        scaleFactor: 2.83,
        type: "ios"
    },
    // Icon-Small@2x
    {
        name: "Icon-Small@2x",
        scaleFactor: 5.66,
        type: "ios"
    },
    {
        name: "Icon-Small@3x",
        scaleFactor: 8.49,
        type: "ios"
    },

    // iOS 6.1 AND EARLIER

    {
        name: "Icon",
        scaleFactor: 5.56,
        type: "ios"
    },
    {
        name: "Icon@2x",
        scaleFactor: 11.1,
        type: "ios"
    },
    {
        name: "Icon-72",
        scaleFactor: 7.03,
        type: "ios"
    },
    {
        name: "Icon-72@2x",
        scaleFactor: 14.06,
        type: "ios"
    },
    {
        name: "Icon-Small",
        scaleFactor: 2.83,
        type: "ios"
    },
    {
        name: "Icon-Small@2x",
        scaleFactor: 5.66,
        type: "ios"
    },
    {
        name: "Icon-Small-50",
        scaleFactor: 4.88,
        type: "ios"
    },
    {
        name: "Icon-Small-50",
        scaleFactor: 9.76,
        type: "ios"
    },

    // ICONS FOR IPAD ONLY

    {
        name: "iTunesArtwork",
        scaleFactor: 50,
        type: "ios"
    },
    {
        name: "iTunesArtwork@2x",
        scaleFactor: 100,
        type: "ios"
    },
    {
        name: "iTunesArtwork@3x",
        scaleFactor: 150,
        type: "ios"
    },
    {
        name: "Icon-76",
        scaleFactor: 7.42,
        type: "ios"
    },
    {
        name: "Icon-76@2x",
        scaleFactor: 14.8,
        type: "ios"
    },
    {
        name: "Icon-83.5@2x",
        scaleFactor: 16.3,
        type: "ios"
    },
    {
        name: "Icon-Small-40",
        scaleFactor: 3.9,
        type: "ios"
    },
    {
        name: "Icon-Small-40@2x",
        scaleFactor: 7.81,
        type: "ios"
    },
    {
        name: "Icon-Small",
        scaleFactor: 2.83,
        type: "ios"
    },
    {
        name: "Icon-Small@2x",
        scaleFactor: 5.66,
        type: "ios"
    },


    // ICONS FOR WATCH APPLICATIONS
    {
        name: "AppIcon40x40@2x",
        scaleFactor: 7.81,
        type: "ios"
    },
    {
        name: "AppIcon44x44@2x",
        scaleFactor: 8.59,
        type: "ios"
    },
    {
        name: "AppIcon86x86@2x",
        scaleFactor: 16.7,
        type: "ios"
    },
    {
        name: "AppIcon98x98@2x",
        scaleFactor: 19.1,
        type: "ios"
    },
    {
        name: "AppIcon24x24@2x",
        scaleFactor: 4.68,
        type: "ios"
    },
    {
        name: "AppIcon27.5x27.5@2",
        scaleFactor: 5.37,
        type: "ios"
    },
    {
        name: "AppIcon29x29@2x",
        scaleFactor: 5.66,
        type: "ios"
    },
    {
        name: "AppIcon29x29@3x",
        scaleFactor: 8.49,
        type: "ios"
    },

    // FOR NOTIFICATIONS
    {
        name: "Icon-Notification",
        scaleFactor: 1.95,
        type: "ios"
    },
    {
        name: "Icon-Notification@2x",
        scaleFactor: 3.9,
        type: "ios"
    }
];

var folder = Folder.selectDialog("Select export directory");
var document = app.activeDocument;

if(document && folder) {
    var dialog = new Window("dialog","Select export sizes");
    var osGroup = dialog.add("group");

    var androidCheckboxes = createSelectionPanel("Android", androidExportOptions, osGroup);
    var iosCheckboxes = createSelectionPanel("iOS", iosExportOptions, osGroup);

    var buttonGroup = dialog.add("group");
    var okButton = buttonGroup.add("button", undefined, "Export");
    var cancelButton = buttonGroup.add("button", undefined, "Cancel");

    okButton.onClick = function() {
        for (var key in selectedExportOptions) {
            if (selectedExportOptions.hasOwnProperty(key)) {
                var item = selectedExportOptions[key];
                exportToFile(item.scaleFactor, item.name, item.type);
            }
        }
        this.parent.parent.close();
    };

    cancelButton.onClick = function () {
        this.parent.parent.close();
    };

    dialog.show();
}

function exportToFile(scaleFactor, resIdentifier, os) {
    var i, ab, file, options, expFolder;
    if(os === "android")
        expFolder = new Folder(folder.fsName + "/drawable-" + resIdentifier);
    else if(os === "ios")
        expFolder = new Folder(folder.fsName + "/iOS");

	if (!expFolder.exists) {
		expFolder.create();
	}

	for (i = document.artboards.length - 1; i >= 0; i--) {
		document.artboards.setActiveArtboardIndex(i);
		ab = document.artboards[i];

	if(ab.name.charAt(0)=="!")
            continue;

        // Modification: Removed artboard name (not necessary, just define name in script)
        if(os === "android")
            file = new File(expFolder.fsName + "/" + ".png");
            // file = new File(expFolder.fsName + "/" + ab.name + ".png");
        else if(os === "ios")
            file = new File(expFolder.fsName + "/" + resIdentifier + ".png");
            // file = new File(expFolder.fsName + "/" + ab.name + resIdentifier + ".png");

            options = new ExportOptionsPNG24();
            options.transparency = true;
            options.artBoardClipping = true;
            options.antiAliasing = true;
            options.verticalScale = scaleFactor;
            options.horizontalScale = scaleFactor;

            document.exportFile(file, ExportType.PNG24, options);
	}
};

function createSelectionPanel(name, array, parent) {
    var panel = parent.add("panel", undefined, name);
    panel.alignChildren = "left";
    for(var i = 0; i < array.length;  i++) {
        var cb = panel.add("checkbox", undefined, "\u00A0" + array[i].name);
        cb.item = array[i];
        cb.onClick = function() {
            if(this.value) {
                selectedExportOptions[this.item.name] = this.item;
                //alert("added " + this.item.name);
            } else {
                delete selectedExportOptions[this.item.name];
                //alert("deleted " + this.item.name);
            }
        };
    }
};
