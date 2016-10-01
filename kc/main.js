/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

require(['ojs/ojcore',
    'knockout', 'jquery',
    'ojs/ojknockout', 'ojs/ojbutton',
    'ojs/ojtoolbar', 'ojs/ojmenu'],
        function (oj, ko, $)
        {
            function DemoViewModel() {
            }
            $(document).ready(
                    function ()
                    {
                        ko.applyBindings(new DemoViewModel());
                    }
            );
        }
);
