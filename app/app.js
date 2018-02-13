function romanCharacterValue(romanCharacter) {
    switch (romanCharacter) {
    case "I" || "i":
        return 1;
        break;
    case "V" || "v":
        return 5;
        break;
    case "X" || "x":
        return 10;
        break;
    case "L" || "l":
        return 50;
        break;
    case "C" || "c":
        return 100;
        break;
    case "D" || "d":
        return 500;
        break;
    case "M" || "m":
        return 1000;
        break;
    }
}

function romanToArabicConvert(romanNumber){
    var arabicValue = 0;

    for(i = 0; i < romanNumber.length; i++){
        var s1 = romanCharacterValue(romanNumber.charAt(i));

        if (i+1 < romanNumber.length)
        {
            var s2 = romanCharacterValue(romanNumber.charAt(i+1));

            if (s1 >= s2)
            {
                arabicValue = arabicValue + s1;
            }
            else
            {
                arabicValue = arabicValue + s2 - s1;
                i++;
            }
        }
        else
        {
            arabicValue = arabicValue + s1;
            i++;
        }
    }

    return arabicValue;
}

Ext.create('Ext.form.Panel', {
    title: 'User Form',
    width: 300,
    bodyPadding: 10,
    renderTo: Ext.getBody(),
    items: [{
        xtype: 'textfield',
        width: 200,
        name: 'roman',
        id: 'roman',
        fieldLabel: 'Roman'
    }, {
        xtype: 'button',
        text: 'Convert',
        handler: function () {
            var romanTextField = Ext.getCmp('roman');
            var arabicTextField = Ext.getCmp('arabic');
            var arabicNumberValue = 0;

            arabicNumberValue = romanToArabicConvert(romanTextField.getValue());
            arabicTextField.setHtml(arabicNumberValue);

        }
    }, {
        xtype: 'panel',
        id: 'arabic',
        html: 'this is for testing'
    }]

});
