module.exports = function(grunt) {
    grunt.initConfig({
		sass: {
			options: {
                includePaths: ['node_modules/bootstrap-sass/assets/stylesheets']
            },
            dist: {
				options: {
					outputStyle: 'compressed'
                },                
                files: [{
                    'assets/css/main.css': 'assets/scss/main.scss',       /* 'Main All' */
                    'assets/css/timeline.css': 'assets/scss/pages/timeline.scss', /* 'Page timeline SCSS to CSS' */
                    'assets/css/blog.css': 'assets/scss/pages/blog.scss', /* 'Blog page' */
                    'assets/css/chatapp.css': 'assets/scss/pages/chatapp.scss', /* 'Chat App Page SCSS to CSS' */
                    'assets/css/authentication.css': 'assets/scss/pages/authentication.scss' /* 'Chat App Page SCSS to CSS' */
				}]
            }
        },
        uglify: {
          my_target: {
            files: {
               'assets/bundles/libscripts.bundle.js': ['assets/plugins/jquery/jquery-v3.2.1.min.js','assets/plugins/bootstrap/js/bootstrap.js'], /* main js*/
              
               'assets/bundles/vendorscripts.bundle.js': ['assets/plugins/jquery-slimscroll/jquery.slimscroll.js','assets/plugins/node-waves/waves.js'], /* coman js*/
                
               'assets/bundles/mainscripts.bundle.js': ['assets/js/admin.js','assets/js/demo.js'], /* coman js*/
               
               'assets/bundles/flotscripts.bundle.js': ['assets/plugins/flot-charts/jquery.flot.js','assets/plugins/flot-charts/jquery.flot.resize.js','assets/plugins/flot-charts/jquery.flot.pie.js','assets/plugins/flot-charts/jquery.flot.categories.js','assets/plugins/flot-charts/jquery.flot.time.js'], /* Flot Chart js*/
               
               'assets/bundles/chartscripts.bundle.js': ['assets/plugins/chartjs/Chart.bundle.js'], /* ChartJs js*/
               
               'assets/bundles/datatablescripts.bundle.js': ['assets/plugins/jquery-datatable/jquery.dataTables.min.js','assets/plugins/jquery-datatable/dataTables.bootstrap4.min.js'], /* Jquery DataTable Plugin Js  */
               
               'assets/bundles/morrisscripts.bundle.js': ['assets/plugins/raphael/raphael.min.js','assets/plugins/morrisjs/morris.js'], /* Morris Plugin Js */
               
               'assets/bundles/flotchartsscripts.bundle.js': ['Assets/plugins/flot-charts/jquery.flot.js','Assets/plugins/flot-charts/jquery.flot.resize.js','Assets/plugins/flot-charts/jquery.flot.pie.js','Assets/plugins/flot-charts/jquery.flot.categories.js','Assets/plugins/flot-charts/jquery.flot.time.js'], /* Morris Plugin Js */
               
               'assets/bundles/fullcalendarscripts.bundle.js': ['assets/plugins/fullcalendar/lib/moment.min.js','assets/plugins/fullcalendar/lib/jquery-ui.custom.min.js','assets/plugins/fullcalendar/fullcalendar.min.js'],   /* calender page js */

               'assets/bundles/jvectormapscripts.bundle.js': ['assets/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js','assets/plugins/jvectormap/jquery-jvectormap-world-mill-en.js'],   /*  JVectorMap Plugin Js */            
                           
              }
            }
        }
                
    });
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask("buildcss", ["sass"]);
    grunt.registerTask("buildjs", ["uglify"]);
};
 

