
# Todo App

- Angular CLI version 14.2.11.
- Frontend only
- Communicate with API


### Clone Project
```
  git clone https://github.com/nauvalidzi/angular-todo.git
```

### Install repository requirements
```
cd angular-todo
npm install
```

### Ready to serve
```
ng serve -o
```

## Structure Table

| ID | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | int | AUTO_INCREMENT |
| `title`| varchar(255) | `utf8mb4_general_ci` |
| `body` | text | `utf8mb4_general_ci` |
| `status` | tinyint | `[0,1]`|
| `updated` | datetime ||
