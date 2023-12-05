 AUI().use('aui-base', 'liferay-util-window', function(A) {
    AUI().ready('liferay-store', function(A) {
        A.on('click', function(event) {
            // Toggle dropdown visibility when the trigger button is clicked
            var dropdown = event.currentTarget.next('.dropdown-menu');
            dropdown.toggleClass('show');
        }, '.dropdown-toggle');
        
    }); 
}); 

