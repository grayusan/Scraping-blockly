var workspace = Blockly.inject('blocklyDiv',
             {
                 media: 'media/',
                 toolbox: document.getElementById('toolbox')
             });
function myUpdateFunction(event) {
    var code = Blockly.Python.workspaceToCode(workspace);
    document.getElementById('source').textContent = code;
  }
  workspace.addChangeListener(myUpdateFunction);