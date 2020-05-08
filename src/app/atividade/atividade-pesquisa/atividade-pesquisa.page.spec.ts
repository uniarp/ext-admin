import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtividadePesquisaPage } from './atividade-pesquisa.page';

describe('AtividadePesquisaPage', () => {
  let component: AtividadePesquisaPage;
  let fixture: ComponentFixture<AtividadePesquisaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtividadePesquisaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtividadePesquisaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
