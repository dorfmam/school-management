📚 School Management System - TypeScript

This is a Object-Oriented Programming project developed in TypeScript. The purpose of this project is simulate a school grade system, where there are students, teachers and the class management.

---

📰 Classes

👤 Pessoa

- Represents a generic person in the system, storing basic information such as name, CPF and e-mail.

👥 Turma

- Represents a school class. It stores the class name, the assigned professor, and a list of enrolled students. It provides methods to add students, list all students, and display each student's report card.

👨‍🏫 Professor (extends Pessoa)

- Represents a teacher. Besides the basic information inherited from Pessoa, it stores the subject the teacher is responsible for.

👩‍🎓 ALuno (extends Pessoa)**

- Represents a student. In addition to the inherited information from Pessoa, it also includes a registration number and grades by subject. It provides methods to add grades, calculate averages, check if the student has passed, and display the student's report card.

---

🔧 Installation

✅ Prerequisites

Make sure you've installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**

 ⭐ **Steps to run the project locally**

1. **Clone the repository**
    ```bash
    git clone https://github.com/dorfmam/sistema-escolar.git
    cd typescript-class
    ```

2. **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Compile the code from TypeScript to JavaScript**
    ```bash
    npx tsc
    ```

4. **Execute the project**
    ```bash
    node build/main.js
    ```

🌐 Project Structure

```
school-management-system/
├── build/                 # Compiled JavaScript files (output from TypeScript)
│   ├── models/            # Compiled class files
│   │   ├── aluno.js
│   │   ├── pessoa.js
│   │   ├── professor.js
│   │   └── turma.js
│   └── main.js            # Compiled main script
├── models/                # TypeScript classes representing system entities
│   ├── aluno.ts           # Represents the student and their grades
│   ├── pessoa.ts          # Base class for shared attributes (e.g., name, email)
│   ├── professor.ts       # Represents the teacher
│   └── turma.ts           # Represents the class/group and its students
├── node_modules/          # Project dependencies
├── main.ts                # Entry point of the application
├── package-lock.json      # Lockfile for dependency consistency
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript compiler configuration
└── README.md              # Project documentation
```

## 📚 Contributions

Feel free to contribute! To contribute:

1. **Fork the repository.**
2. **Create a feature branch:**
    ```bash
   git checkout -b feature/new-feature
    ```
3. **Commit your changes:**
   ```bash
   git commit -m 'Adding new feature'
   ```
4. **Push to the remote repository:**
   ```bash
   git push origin feature/new-feature
   ```
5. **Open a Pull Request.**

## 📧 Contact

If you have any questions or suggestions, feel free to reach out:

- **Author**: [Caio Dorfmam](https://github.com/dorfmam/main)
- **Email**: contatodorfmam@gmail.com
