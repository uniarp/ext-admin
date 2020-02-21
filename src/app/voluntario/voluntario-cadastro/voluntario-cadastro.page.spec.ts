import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VoluntarioCadastroPage } from './voluntario-cadastro.page';

describe('VoluntarioCadastroPage', () => {
  let component: VoluntarioCadastroPage;
  let fixture: ComponentFixture<VoluntarioCadastroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoluntarioCadastroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VoluntarioCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
