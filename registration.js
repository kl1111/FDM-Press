        var frm = 0



        $(document).ready(function() {

            $("#resbutton").click(
                function() {
                    frm.resetForm();

                });



            frm = $('#signup').validate({

                rules: {

                    username: {
                        required: true,
                        minlength: 3

                    },
                    email: {
                        email: true,
                        required: true
                    },
                    password: 'required',
                    firstname: 'required',
                    lastname: 'required'

              }

            });
        });