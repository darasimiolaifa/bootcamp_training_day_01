

function Course(title, lecturer, venue) {
  
  this._title = title;
  this._lecturer = lecturer;
  this._venue = venue;
  this._basePassMark = 50;
  this._students = [];
  this._passList = [];
  
  this.register_student = function(first_name, last_name) {
    var student = {
      first_name : first_name,
      last_name : last_name
    };
    
    this._students.push(student);
    return this._students.indexOf(student);
  };
  
  this.record_scores = function(student_id, score) {
    grade = {
      id : student_id,
      score : score
    }

    if (score > this._basePassMark) {
      this._passList.push(grade);
    }
    
  };

  this.check_passList = function() {
    return this._passList;
  }

}

function Social_Sciences(title, lecturer, venue) {

  Course.call(this, title, lecturer, venue);

  Social_Sciences.prototype = Object.create(Course.prototype);
  Social_Sciences.prototype.constructor = Social_Sciences;
}