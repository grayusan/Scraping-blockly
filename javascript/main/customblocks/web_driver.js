Blockly.Blocks['wed_driver'] = {
    init: function() {
      this.appendValueInput("driver_name")
          .setCheck("String")
          .appendField("set");
      this.appendDummyInput()
          .appendField("as a web driver");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Python['wed_driver'] = function(block) {
    var value_driver_name = Blockly.Python.valueToCode(block, 'driver_name', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "browser = webdriver." + value_driver_name + "()";
    return code;
};

