<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <title>Регистрация</title>
  <link rel="stylesheet" href="style14.css">
</head>
<body>
  <div class="header">
        <h2>Зарегестрируйтесь</h2>
  </div>
        <div class="column row">
  <form method="post" action="register.php">
        <?php include('errors.php'); ?>
        <div class="input-group">
          <label>Логин</label>
          <input type="text" name="username" value="<?php echo $username; ?>">
        </div>
        <div class="input-group">
          <label>Почта</label>
          <input type="email" name="email" value="<?php echo $email; ?>">
        </div>
        <div class="input-group">
          <label>Пароль</label>
          <input type="password" name="password_1">
        </div>
        <div class="input-group">
          <label>Подтверждение пароля</label>
          <input type="password" name="password_2">
        </div>
        <div class="input-group">
          <button type="submit" class="btn" name="reg_user">Зарегестрироваться</button>
        </div>
        <p>
                Уже есть аккаунт? <a href="login.php">Войти</a>
        </p>
  </form>
</div>
</body>
</html>