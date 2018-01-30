var Cal = function(divId) {

  //Store div id
  this.divId = divId;

  // Days of week, starting on Sunday
  this.DaysOfWeek = [
    'Dom',
    'Seg',
    'Ter',
    'Qua',
    'Qui',
    'Sex',
    'Sab'
  ];

  // Months, stating on January
  this.Months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Augosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ];

  // Set the current month, year
  var d = new Date();

  this.currMonth = d.getMonth();
  this.currYear = d.getFullYear();
  this.currDay = d.getDate();

};

// Goes to next month
Cal.prototype.nextMonth = function() {
  if ( this.currMonth == 11 ) {
    this.currMonth = 0;
    this.currYear = this.currYear + 1;
  }
  else {
    this.currMonth = this.currMonth + 1;
  }
  this.showcurr();
};

// Goes to previous month
Cal.prototype.previousMonth = function() {
  if ( this.currMonth == 0 ) {
    this.currMonth = 11;
    this.currYear = this.currYear - 1;
  }
  else {
    this.currMonth = this.currMonth - 1;
  }
  this.showcurr();
};

// Show current month
Cal.prototype.showcurr = function() {
  this.showMonth(this.currYear, this.currMonth);
};

// Show month (year, month)
Cal.prototype.showMonth = function(y, m) {

  var d = new Date()
  // First day of the week in the selected month
  , firstDayOfMonth = new Date(y, m, 1).getDay()
  // Last day of the selected month
  , lastDateOfMonth =  new Date(y, m+1, 0).getDate()
  // Last day of the previous month
  , lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();


  var html = '<table>';

  // Write selected month and year
  html += '<thead><tr>';
  html += '<td colspan="7">' + this.Months[m] + ' ' + y + '</td>';
  html += '</tr></thead>';


  // Write the header of the days of the week
  html += '<tr class="days">';
  for(var i=0; i < this.DaysOfWeek.length;i++) {
    html += '<td>' + this.DaysOfWeek[i] + '</td>';
  }
  html += '</tr>';

  // Write the days
  var i=1;
  do {

    var dow = new Date(y, m, i).getDay();

    // If Sunday, start new row
    if ( dow == 0 ) {
      html += '<tr>';
    }
    // If not Sunday but first day of the month
    // it will write the last days from the previous month
    else if ( i == 1 ) {
      html += '<tr>';
      var k = lastDayOfLastMonth - firstDayOfMonth+1;
      for(var j=0; j < firstDayOfMonth; j++) {
        html += '<td class="not-current">' + k + '</td>';
        k++;
      }
    }

    // Write the current day in the loop
    var chk = new Date();
    var chkY = chk.getFullYear();
    var chkM = chk.getMonth();
    if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
      html += '<td class="today">' + i + '</td>';
    } else {
      html += '<td class="normal">' + i + '</td>';
    }
    // If Saturday, closes the row
    if ( dow == 6 ) {
      html += '</tr>';
    }
    // If not Saturday, but last day of the selected month
    // it will write the next few days from the next month
    else if ( i == lastDateOfMonth ) {
      var k=1;
      for(dow; dow < 6; dow++) {
        html += '<td class="not-current">' + k + '</td>';
        k++;
      }
    }

    i++;
  }while(i <= lastDateOfMonth);

  // Closes table
  html += '</table>';

  // Write HTML to the div
  document.getElementById(this.divId).innerHTML = html;
};

// On Load of the window
window.onload = function() {

  // Start calendar
  var c = new Cal("divCal");			
  c.showcurr();

  // Start calendar
  var d = new Cal("divCal2");      
  d.showcurr();

  // Start calendar
  var marco = new Cal("divCal3");      
  marco.showcurr();

  // Start calendar
  var abril = new Cal("divCal4");      
  abril.showcurr();

  // Start calendar
  var maio = new Cal("divCal5");      
  maio.showcurr();

  // Start calendar
  var junho = new Cal("divCal6");      
  junho.showcurr();

  // Start calendar
  var julho = new Cal("divCal7");      
  julho.showcurr();

  // Start calendar
  var agosto = new Cal("divCal8");      
  agosto.showcurr();

  // Start calendar
  var setembro = new Cal("divCal9");      
  setembro.showcurr();

  // Start calendar
  var outubro = new Cal("divCal10");      
  outubro.showcurr();

  // Start calendar
  var novembro = new Cal("divCal11");      
  novembro.showcurr();

  // Start calendar
  var dezembro = new Cal("divCal12");      
  dezembro.showcurr();

  

  // Bind next and previous button clicks
  getId('btnNext').onclick = function() {
    c.nextMonth();
  };
  getId('btnPrev').onclick = function() {
    c.previousMonth();
  };

  // Bind next and previous button clicks
  getId('btnNext2').onclick = function() {
    d.nextMonth();
  };
  getId('btnPrev2').onclick = function() {
    d.previousMonth();
  };

  // Bind next and previous button clicks
  getId('btnNext3').onclick = function() {
    marco.nextMonth();
  };
  getId('btnPrev3').onclick = function() {
    marco.previousMonth();
  };

  // Bind next and previous button clicks
  getId('btnNext4').onclick = function() {
    abril.nextMonth();
  };
  getId('btnPrev4').onclick = function() {
    abril.previousMonth();
  };

  // Bind next and previous button clicks
  getId('btnNext5').onclick = function() {
    maio.nextMonth();
  };
  getId('btnPrev5').onclick = function() {
    maio.previousMonth();
  };

  // Bind next and previous button clicks
  getId('btnNext6').onclick = function() {
    junho.nextMonth();
  };
  getId('btnPrev6').onclick = function() {
    junho.previousMonth();
  };

  // Bind next and previous button clicks
  getId('btnNext7').onclick = function() {
    julho.nextMonth();
  };
  getId('btnPrev7').onclick = function() {
    julho.previousMonth();
  };

  // Bind next and previous button clicks
  getId('btnNext8').onclick = function() {
    agosto.nextMonth();
  };
  getId('btnPrev8').onclick = function() {
    agosto.previousMonth();
  };

  // Bind next and previous button clicks
  getId('btnNext9').onclick = function() {
    setembro.nextMonth();
  };
  getId('btnPrev9').onclick = function() {
    setembro.previousMonth();
  };

  // Bind next and previous button clicks
  getId('btnNext10').onclick = function() {
    outubro.nextMonth();
  };
  getId('btnPrev10').onclick = function() {
    outubro.previousMonth();
  };

  // Bind next and previous button clicks
  getId('btnNext11').onclick = function() {
    novembro.nextMonth();
  };
  getId('btnPrev11').onclick = function() {
    novembro.previousMonth();
  };

  // Bind next and previous button clicks
  getId('btnNext12').onclick = function() {
    dezembro.nextMonth();
  };
  getId('btnPrev12').onclick = function() {
    dezembro.previousMonth();
  };
}





// Get element by id
function getId(id) {
  return document.getElementById(id);
}