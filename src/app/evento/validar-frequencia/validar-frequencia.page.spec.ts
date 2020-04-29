import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValidarFrequenciaPage } from './validar-frequencia.page';

describe('ValidarFrequenciaPage', () => {
  let component: ValidarFrequenciaPage;
  let fixture: ComponentFixture<ValidarFrequenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidarFrequenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidarFrequenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
