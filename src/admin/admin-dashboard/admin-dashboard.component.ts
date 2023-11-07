import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlockchainService } from 'src/services/blockchain.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.sass'],
})
export class AdminDashboardComponent implements OnInit {

  isCollapse: boolean = true;

  isAdmin: boolean = false;

  checkProgress: boolean = true;
  progressWarn: boolean = false
  progressMsg: string = 'Kiểm tra Admin....';

  constructor(
    private router: Router,
    private bs: BlockchainService
  ) { }

  ngOnInit(): void {
    this.onCheckAdmin()
    this.router.navigate(['admin/admin-dashboard']);
  }

  onCheckAdmin() {
    this.progressMsg = 'Kiểm tra quyền truy cập của Admin...'
    this.progressWarn = false
    console.log("check admin");

    this.bs.checkIsAdmin().then(r => {
      console.log(r);
      if (r) {
        this.isAdmin = true
      }
    }).catch((er: any) => {
      this.checkProgress = false
      this.progressWarn = true
      this.progressMsg = '<span class="text-danger">Chỉ Admin mới có quyền truy cập vào trang này.... </span><br> ' +
        'Kết nối Metamask với tài khoản Admin của bạn'
    })
  }
}
