import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScannerQrPage } from './scanner-qr.page';

describe('ScannerQrPage', () => {
  let component: ScannerQrPage;
  let fixture: ComponentFixture<ScannerQrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScannerQrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScannerQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
