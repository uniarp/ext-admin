import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VoluntarioPesquisaPage } from './voluntario-pesquisa.page';

describe('VoluntarioPesquisaPage', () => {
  let component: VoluntarioPesquisaPage;
  let fixture: ComponentFixture<VoluntarioPesquisaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoluntarioPesquisaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VoluntarioPesquisaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
