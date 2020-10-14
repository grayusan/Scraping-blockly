Blockly.Blocks['find_all_classes'] = {
    init: function() {
      this.appendValueInput("class_name")
          .setCheck(null)
          .appendField("find all classes with");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Python['find_all_classes'] = function(block) {
    var value_class_name = Blockly.Python.valueToCode(block, 'class_name', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'browser.find_elements_by_class_name(' + value_class_name +')';
    return code;
};

