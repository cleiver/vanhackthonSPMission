import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { ContractService } from '../../contract.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(
    private _contractService: ContractService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false
    }

  }

  _redirected = false
  _contract = {
    "id": "",
  	"title": "Dream Contract",
		"description": "It's a big and huge contract!",
		"price": 80000,
    "isOpened": false,
    "isSigned": false
  }

  ret = null


  ngOnInit() {
    this._contract.id = (this.route.snapshot.paramMap.get("id"))
    if (this.route.snapshot.paramMap.get("r")) {
      this._redirected = true
    }
    this.getProposal(this._contract.id)
  }

  getProposal(id: string){
    // this._contractService.getProposals().subscribe(
    //   result => this._contract = result
    // );

    return this._contract;

  }

  signProposal(id: string) {
    this.ret = {
      "error": "Proposal is out-of-date",
      "id": "333444"
    }

    return this.ret
  }

  declineProposal(id: string) {
    this.ret = {
      //"error": "Error on decline proposal",
      "id": "333444"
    }

    return this.ret
  }

  showError() {
    this.router.navigate([`/view/${this.ret.id}/r`]);
    Promise.resolve(null).then(() => {
      this.ret = null
      return this.ret
    })
  }

  disableButtons() {
    Promise.resolve(null).then(() => {
      this._contract.isSigned = true
      this.ret = null
      return this._contract
    })
  }

  doNothing(){ }

  isDisabled(): boolean {
    return this._contract.isSigned
  }

}
