import { Component, OnInit } from '@angular/core';
import liff from 'liff-v2-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  username: ''
  password: ''

  ngOnInit() { console.log(`OnInit`); 
  //alert('before create');
    liff.init({ liffId: "https://liff.line.me/1654367482-5LkZWvre" }, () => {
      if (liff.isLoggedIn()) {
        // ขั้นตอน 4.4 รออยู่
      } else {
        liff.login();
      }
    }, err => console.error(err.code, err.message));
  }
  
login() {
  console.log('login');
    alert('login');
    liff.getProfile().then(profile => {
      // const userProfile = profile.userId;
      const displayName = profile.displayName;
      // const statusMessage = profile.statusMessage;
      // const pictureUrl = profile.pictureUrl;
      // const email = liff.getDecodedIDToken().email;
      alert('displayName : '+displayName);
    }).catch(
      err => console.error(err)
    );
    // this.$store.dispatch('addTodo', {
    //   task: this.task,
    //   newId: this.newId
    // })
    // this.task = ''
  }
}
