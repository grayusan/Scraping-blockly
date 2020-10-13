Blockly.Blocks['import_python'] = {
    init: function() {
      this.appendValueInput("import_value")
          .setCheck("String");
      this.appendDummyInput()
          .appendField("をインポートする");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(200);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.JavaScript['import_python'] = function(block) {
    var value_import_value = Blockly.JavaScript.valueToCode(block, 'import_value', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'import' + value_import_value;
    return code;
};