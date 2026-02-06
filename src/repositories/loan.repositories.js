import db from "../config/database.js";

db.run(`CREATE TABLE IF NOT EXISTS loans (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  bookId INTEGER,
  userId INTEGER,
  dueDate DATE,
  FOREIGN KEY (bookId) REFERENCES books(id),
  FOREIGN KEY (userId) REFERENCES users(id)
);`);

function createLoanRepository(userId, bookId, dueDate) {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO loans (userId, bookId, dueDate) VALUES (?, ?, ?)`,
      [userId, bookId, dueDate],
      function (err) {
        if (err) {
          return reject(err);
        } else {
          resolve({ id: this.lastID, userId, bookId, dueDate });
        }
      },
    );
  });
}

function findAllLoansRepository() {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT 
      loans.id, loans.dueDate, users.email, books.title 
      FROM loans
      JOIN users ON loans.userId = users.id
      JOIN books ON loans.bookId = books.id
      `,
      [],
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      },
    );
  });
}

function findLoanByIdRepository(loanId) {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM loans WHERE id = ?`, [loanId], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function deleteLoanRepository(loanId) {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM loans WHERE id = ?`, [loanId], function (err) {
      if (err) {
        reject(err);
      } else {
        resolve({ message: "Loan deleted successfully", loanId });
      }
    });
  });
}

export default {
  createLoanRepository,
  findAllLoansRepository,
  findLoanByIdRepository,
  deleteLoanRepository,
};
