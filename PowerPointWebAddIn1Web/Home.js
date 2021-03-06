﻿/// <reference path="/Scripts/FabricUI/MessageBanner.js" />


(function () {
    "use strict";

    var messageBanner;

    // The initialize function must be run each time a new page is loaded.
    Office.initialize = function (reason) {
        $(document).ready(function () {
            // Initialize the FabricUI notification mechanism and hide it
            var element = document.querySelector('.ms-MessageBanner');
            messageBanner = new fabric.MessageBanner(element);
            messageBanner.hideBanner();

            $('#get-data-from-selection').click(getDataFromSelection);
        });
    };

    // Reads data from current document selection and displays a notification
    function getDataFromSelection() {
        $('#get-data-from-selection').html("pressed");
        window.open("https://templafy.templafy.com/api-v1/Document/OpenDocument?temporaryFileName=2016-11-29T142715.2089635%2b0000-Base+template.pptx&documentName=Base+template.pptx&templateType=Presentation", "_blank");

        //Office.context.document.getSelectedDataAsync(Office.CoercionType.Text,
        //    function (result) {
        //        if (result.status === Office.AsyncResultStatus.Succeeded) {
        //            showNotification('The selected text is:', '"' + result.value + '"');
        //        } else {
        //            showNotification('Error:', result.error.message);
        //        }
        //    }
        //);
    }

    // Helper function for displaying notifications
    function showNotification(header, content) {
        $("#notificationHeader").text(header);
        $("#notificationBody").text(content);
        messageBanner.showBanner();
        messageBanner.toggleExpansion();
    }
})();
