import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValidarCertificadoPage } from './validar-certificado.page';

describe('ValidarCertificadoPage', () => {
  let component: ValidarCertificadoPage;
  let fixture: ComponentFixture<ValidarCertificadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidarCertificadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidarCertificadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
