/* eslint-disable react-hooks/exhaustive-deps */
import UseBaseController from "./base.controller";
import BaseView from "@components/baseView/baseView";
import {
  Container,
  MealDescriptionContainer,
  RestaurantContainer,
  Meal,
  MealDescription,
  MealCountContainer,
  MealImageContainer,
  CardLine,
  CardBase,
  TextAreaContainer,
  FoodSizeContainer,
  FoodSizeFirstItem,
  FoodSizeSecondItem,
  BeverageContainer,
  BeverageItem,
  CutleryContainer,
  CutleryItem,
  ExtraContainer,
  ExtraItem,
} from "./base.styles";
import MatsuriLogo from "@images/matsuri-branding.png";
import MealImage from "@images/meat-larger.png";
import { useEffect } from "react";
import Button from "@components/button/button";
import Trash from "@icons/trash";
import Plus from "@icons/plus";
import Minor from "@icons/minor";
import MinorDisabled from "@icons/minorDisabled";
import Dollar from "@icons/dollar";
import { Card } from "./module/card/card";
import Radio from "@components/radioButton/radioButton";
import CheckButton from "@components/checkButton/checkButton";

const Base = () => {
  const { Actions, States } = UseBaseController();

  useEffect(() => {
    Actions.addTotalPrice();
    Actions.onManageMealSize();
  });

  return (
    <BaseView haveTicket={true}>
      <Container>
        <MealDescriptionContainer>
          <RestaurantContainer>
            <img src={MatsuriLogo} alt="branding" />
            <span>Matsuri Concept</span>
          </RestaurantContainer>
          <Meal>
            <MealDescription>
              <div>
                <span>Ceviche de salmão</span>
                <span>
                  a partir de <strong>R$ {States.mealBasePrice}</strong>
                </span>
                <span>salmão temperado com limão, cebola e pimenta</span>
              </div>
              <div>
                <div>
                  <span>quantos</span>
                  {States.mealCount > 0 ? (
                    <span>
                      total <strong>R$ {States.totalPrice}</strong>
                    </span>
                  ) : (
                    <span></span>
                  )}
                </div>

                <div>
                  {States.mealCount === 0 && (
                    <Button
                      color="gray"
                      onClick={Actions.onAddMeal}
                      text="adicionar"
                    />
                  )}
                  {States.mealCount === 1 && (
                    <MealCountContainer>
                      <Trash onClick={Actions.onRemoveMeal} />
                      <span>{States.mealCount}</span>
                      <Plus onClick={Actions.onAddMeal} />
                    </MealCountContainer>
                  )}
                  {States.mealCount > 1 && (
                    <MealCountContainer>
                      <Minor onClick={Actions.onRemoveMeal} />
                      <span>{States.mealCount}</span>
                      <Plus onClick={Actions.onAddMeal} />
                    </MealCountContainer>
                  )}
                </div>
              </div>
            </MealDescription>

            <MealImageContainer>
              <img src={MealImage} alt="meal" />
            </MealImageContainer>
          </Meal>
        </MealDescriptionContainer>
        <CardLine />

        <CardBase>
          <Card.Container>
            <Card.Title text="qual o tamanho?" withFlag />
            <Card.Subtitle text="escolha 1" />
            <Card.Content>
              <FoodSizeContainer>
                <FoodSizeFirstItem>
                  <label>
                    <Radio
                      checked={States.mealSize === "medium"}
                      name="foodSize"
                      onClick={() => {
                        Actions.onChangeMealSize("medium");
                      }}
                    />
                    <Dollar />
                    <span>médio</span>
                  </label>
                  <div>
                    <span>
                      de R$ 22,90 por <strong>R$ 19,90</strong>
                    </span>
                  </div>
                </FoodSizeFirstItem>

                <FoodSizeSecondItem>
                  <label>
                    <Radio
                      checked={States.mealSize === "large"}
                      name="foodSize"
                      onClick={() => {
                        Actions.onChangeMealSize("large");
                      }}
                    />
                    <span>grande</span>
                  </label>
                  <div>
                    <span>R$ 28,90</span>
                  </div>
                </FoodSizeSecondItem>
              </FoodSizeContainer>
            </Card.Content>
          </Card.Container>
        </CardBase>

        <CardLine />

        <CardBase>
          <Card.Container>
            <Card.Title text="vai querer bebida?" withFlag={false} />
            <Card.Subtitle text="escolha quantos quiser" />
            <Card.Content>
              <BeverageContainer>
                <BeverageItem>
                  <label>
                    {States.coke.count === 0 && (
                      <MealCountContainer>
                        <MinorDisabled />
                        <span>{States.coke.count}</span>
                        <Plus onClick={() => Actions.onAddBeverage("coke")} />
                      </MealCountContainer>
                    )}
                    {States.coke.count === 1 && (
                      <MealCountContainer>
                        <Trash
                          onClick={() => Actions.onRemoveBeverage("coke")}
                        />
                        <span>{States.coke.count}</span>
                        <Plus onClick={() => Actions.onAddBeverage("coke")} />
                      </MealCountContainer>
                    )}
                    {States.coke.count > 1 && (
                      <MealCountContainer>
                        <Minor
                          onClick={() => Actions.onRemoveBeverage("coke")}
                        />
                        <span>{States.coke.count}</span>
                        <Plus onClick={() => Actions.onAddBeverage("coke")} />
                      </MealCountContainer>
                    )}
                    <span>coca-cola</span>
                  </label>
                  <div>
                    <span>
                      +R${" "}
                      {States.coke.count === 0
                        ? States.beveragesBasePrice.coke
                        : States.coke.price}
                    </span>
                  </div>
                </BeverageItem>

                <BeverageItem>
                  <label>
                    {States.juice.count === 0 && (
                      <MealCountContainer>
                        <MinorDisabled />
                        <span>{States.juice.count}</span>
                        <Plus onClick={() => Actions.onAddBeverage("juice")} />
                      </MealCountContainer>
                    )}
                    {States.juice.count === 1 && (
                      <MealCountContainer>
                        <Trash
                          onClick={() => Actions.onRemoveBeverage("juice")}
                        />
                        <span>{States.juice.count}</span>
                        <Plus onClick={() => Actions.onAddBeverage("juice")} />
                      </MealCountContainer>
                    )}
                    {States.juice.count > 1 && (
                      <MealCountContainer>
                        <Minor
                          onClick={() => Actions.onRemoveBeverage("juice")}
                        />
                        <span>{States.juice.count}</span>
                        <Plus onClick={() => Actions.onAddBeverage("juice")} />
                      </MealCountContainer>
                    )}
                    <span>suco prats laranja</span>
                  </label>
                  <div>
                    <span>
                      +R${" "}
                      {States.juice.count === 0
                        ? States.beveragesBasePrice.juice
                        : States.juice.price}
                    </span>
                  </div>
                </BeverageItem>

                <BeverageItem>
                  <label>
                    {States.water.count === 0 && (
                      <MealCountContainer>
                        <MinorDisabled />
                        <span>{States.water.count}</span>
                        <Plus onClick={() => Actions.onAddBeverage("water")} />
                      </MealCountContainer>
                    )}
                    {States.water.count === 1 && (
                      <MealCountContainer>
                        <Trash
                          onClick={() => Actions.onRemoveBeverage("water")}
                        />
                        <span>{States.water.count}</span>
                        <Plus onClick={() => Actions.onAddBeverage("water")} />
                      </MealCountContainer>
                    )}
                    {States.water.count > 1 && (
                      <MealCountContainer>
                        <Minor
                          onClick={() => Actions.onRemoveBeverage("water")}
                        />
                        <span>{States.water.count}</span>
                        <Plus onClick={() => Actions.onAddBeverage("water")} />
                      </MealCountContainer>
                    )}
                    <span>água sem gás</span>
                  </label>
                  <div>
                    <span>
                      +R${" "}
                      {States.water.count === 0
                        ? States.beveragesBasePrice.water
                        : States.water.price}
                    </span>
                  </div>
                </BeverageItem>
              </BeverageContainer>
            </Card.Content>
          </Card.Container>
        </CardBase>

        <CardLine />

        <CardBase>
          <Card.Container>
            <Card.Title text="precisa de talher?" withFlag={false} />
            <Card.Subtitle text="escolha até um" />
            <Card.Content>
              <CutleryContainer>
                <CutleryItem>
                  <label>
                    <Radio
                      checked={States.cutleryItem === "hashi"}
                      name="cutlery"
                      onClick={() => Actions.onChangeCutlery("hashi")}
                    />
                    <span>hashi</span>
                  </label>
                </CutleryItem>
                <CutleryItem>
                  <label>
                    <Radio
                      checked={States.cutleryItem === "knifeAndFork"}
                      name="cutlery"
                      onClick={() => Actions.onChangeCutlery("knifeAndFork")}
                    />
                    <span>garfo e faca descartável</span>
                  </label>
                  <div>
                    <span>+R$ {States.knifeAndForkPrice}</span>
                  </div>
                </CutleryItem>
              </CutleryContainer>
            </Card.Content>
          </Card.Container>
        </CardBase>

        <CardLine />

        <CardBase>
          <Card.Container>
            <Card.Title text="mais alguma coisa?" withFlag={false} />
            <Card.Subtitle text="escolha até 2" />
            <Card.Content>
              <ExtraContainer>
                <ExtraItem>
                  <label>
                    <CheckButton
                      checked={States.fortuneCookie}
                      name="fortuneCookie"
                      onClick={Actions.onChangeFortuneCookieState}
                    />
                    <span>biscoito da sorte</span>
                  </label>
                  <div>
                    <span>+R$ 2,00</span>
                  </div>
                </ExtraItem>
                <ExtraItem>
                  <label>
                    <CheckButton
                      checked={States.springRoll}
                      name="springRoll"
                      onClick={Actions.onChangeSpringRollState}
                    />
                    <span>rolinho primavera</span>
                  </label>
                  <div>
                    <span>+R$ 8,00</span>
                  </div>
                </ExtraItem>
              </ExtraContainer>
            </Card.Content>
          </Card.Container>
        </CardBase>

        <CardLine />
        <TextAreaContainer>
          <textarea
            placeholder={`alguma observação do item? • opcional \nex: tirar algum ingrediente, ponto do prato`}
          ></textarea>
        </TextAreaContainer>
      </Container>
    </BaseView>
  );
};

export default Base;
