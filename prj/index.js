(() => {
    // Assuming the student's date of birth is in the format 'YYYY-MM-DD'
    const studentDOB = '2000-05-15';
    const currentDate = new Date();
    const dob = new Date(studentDOB);
    const age = Math.floor((currentDate - dob) / 31536000000);
    
    console.log(`The student is ${age} years old.`);
    
    // how 
})();