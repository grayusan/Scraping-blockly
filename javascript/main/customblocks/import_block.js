Blockly.Blocks['import_python'] = {
    init: function() {
      this.appendValueInput("import_value")
          .setCheck(null)
          .appendField("import");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(200);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Python['import_python'] = function(block) {
    var value_import_value = Blockly.Python.valueToCode(block, 'import_value', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'import' + value_import_value;
    return code;
};

Blockly.Blocks['import_selenium'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Import webdriver from selenium");
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Python['import_selenium'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'from selenium import webdriver';
    return code;
};