let key = document.querySelector('.key');

window.addEventListener('keydown', function(e){
    key.innerHTML = `
    <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key == ' '? 'SPACE': e.key }</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    `;
})