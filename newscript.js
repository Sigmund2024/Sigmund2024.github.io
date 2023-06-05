// Add smooth scrolling to nav links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
});



// const mysql = require('mysql');

// // 创建数据库连接
// const connection = mysql.createConnection({
//   host: '127.0.0.1',
//   port: '3306',
//   user: 'root',
//   password: 'AaaA_2112',
//   database: 'YouthDB'
// });

// // 连接数据库
// connection.connect(function(err) {
//   if (err) {
//     console.error('数据库连接失败：', err);
//   } else {
//     console.log('数据库连接成功');
//   }
// });

// // 表单提交事件处理函数
// form.addEventListener('submit', function(event) {
//   event.preventDefault(); // 阻止表单默认提交行为

//   // 获取输入的姓名、电子邮件和留言内容
//   const name = nameInput.value;
//   const email = emailInput.value;
//   const message = messageInput.value;

//   // 创建新的留言元素
//   const newMessage = document.createElement('div');
//   newMessage.innerHTML = `<p><strong>${name}</strong> (${email}):</p><p>${message}</p>`;

//   // 将新留言添加到留言列表
//   messageList.appendChild(newMessage);

//   // 清空输入框
//   nameInput.value = '';
//   emailInput.value = '';
//   messageInput.value = '';

//   // 将留言插入数据库
//   const sql = `INSERT INTO messages (name, email, message) VALUES ('${name}', '${email}', '${message}')`;
//   connection.query(sql, function(err, result) {
//     if (err) {
//       console.error('插入留言失败：', err);
//     } else {
//       console.log('插入留言成功');
//     }
//   });
// });

// // 加载页面时从数据库获取留言并展示
// window.addEventListener('load', function() {
//   // 查询数据库中的留言数据
//   const sql = 'SELECT * FROM messages';
//   connection.query(sql, function(err, results) {
//     if (err) {
//       console.error('获取留言失败：', err);
//     } else {
//       // 遍历结果，创建留言元素并添加到留言列表
//       results.forEach(function(row) {
//         const newMessage = document.createElement('div');
//         newMessage.innerHTML = `<p><strong>${row.name}</strong> (${row.email}):</p><p>${row.message}</p>`;
//         messageList.appendChild(newMessage);
//       });
//       console.log('获取留言成功');
//     }
//   });
// });


 // 获取表单和留言列表的元素
  const form = document.getElementById('message-form');
  const nameInput = document.getElementById('name-input');
  const emailInput = document.getElementById('email-input');
  const messageInput = document.getElementById('message-input');
  const messageList = document.getElementById('message-list');

  // 表单提交事件处理函数
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 获取输入的姓名、电子邮件和留言内容
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    // 创建新的留言元素
    const newMessage = document.createElement('div');
    newMessage.innerHTML = `<p><strong>${name}</strong> (${email}):</p><p>${message}</p>`;

    // 将新留言添加到留言列表
    messageList.appendChild(newMessage);

    // 清空输入框
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  });
