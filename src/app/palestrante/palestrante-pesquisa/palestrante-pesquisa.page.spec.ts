import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PalestrantePesquisaPage } from './palestrante-pesquisa.page';

describe('PalestrantePesquisaPage', () => {
  let component: PalestrantePesquisaPage;
  let fixture: ComponentFixture<PalestrantePesquisaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalestrantePesquisaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PalestrantePesquisaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
