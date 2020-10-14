Blockly.Blocks['get_url'] = {
    init: function() {
      this.appendValueInput("url")
          .setCheck(null)
          .appendField("get this url");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Python['get_url'] = function(block) {
    var value_url = Blockly.Python.valueToCode(block, 'url', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'browser.get(' + value_url + ")";
    return code;
};

Blockly.Blocks['close_browser'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Close browser");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Python['close_browser'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'browser.close()';
    return code;
};
