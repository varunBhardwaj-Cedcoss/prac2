function con() {
    var valu = document.getElementById('val').value;
    var selc;
    const radioButton = document.querySelectorAll('input[name="conv"]');
    for (Radiobutton of radioButton) {
        if (Radiobutton.checked) {
            selc = Radiobutton.value;
             if (selc == 'min') {
                document.getElementById('res').innerHTML = valu + ' hours = ' + valu * 60 + ' mins';

            }
            if(selc == 'sec') {
                document.getElementById('res').innerHTML = valu + ' hours = ' + valu * 60 * 60 + ' seconds';
            }
        }

    }

};