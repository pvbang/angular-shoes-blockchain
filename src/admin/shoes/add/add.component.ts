import { Component, OnInit } from '@angular/core';
import { IPFSHTTPClient } from 'ipfs-http-client/dist/src/types';
import { DoctorService } from 'src/admin/services/doctor.service';


@Component({
  selector: 'doctor-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass'],
})
export class AddComponent implements OnInit {
  model: any = {
    docID: '',
    fName: 'Tên giày test',
    lName: 'Loại giày test',
    Doj: '',
    emailID: 'Thương hiệu test',
    phone: 'Mô tả test',
    city: 'city',
    state: 'state',
    speciality: 'speciality',
    imageHash: '',
  };

  image_url: any;
  imageCompressedUrl: string = '';

  show: boolean = false;
  msg_text: string = '';
  warn: boolean = false;
  success: boolean = false

  ipfs: IPFSHTTPClient;

  IPFShash: string = ''

  constructor(
    private ds: DoctorService
  ) {
    this.ipfs = ds.ipfs
  }

  ngOnInit(): void {
    this.ipfs = this.ds.ipfs
  }

  onAddDocSubmit() {
    console.log('vao')
    this.show = true;
    this.msg_text = 'Thêm giày vào Network....';
    this.warn = false;
    this.success = false

    this.model.imageHash = this.image_url;

    let data = this.model;

    this.ds.addDoctor(this.model.docID, data).then((r: any) => {
      this.success = true
      this.msg_text = 'Thêm dữ liệu giày vào IPFS...';
      this.msg_text += '<br>Thêm giày vào Blockchain';
      console.log('Shoe added Successfully');

      this.model = {}

    }).catch((er: any) => {
      this.warn = true
      this.msg_text =
        'Thêm giày lỗi<br> <small class="fw-light text-danger"><b>"</b>' +
        this.model.docID +
        '<b>"</b></small><br>Lỗi';
      console.log(er);
    })
  }


  PreviewImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.image_url = event.target.result;
        // this.compressImage();
        console.log(this.image_url);

      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onClose() {
    this.show = false;
    this.warn = false;
  }
}
