/* eslint-disable react-hooks/exhaustive-deps */
import Plus from "@icons/plus";
import Minor from "@icons/minor";
import Radio from "@components/radioButton/radioButton";
import Trash from "@icons/trash";
import Dollar from "@icons/dollar";
import Button from "@components/button/button";
import BaseView from "@components/baseView/baseView";
import MealImage from "@images/meat-larger.png";
import CheckButton from "@components/checkButton/checkButton";
import MatsuriLogo from "@images/matsuri-branding.png";
import MinorDisabled from "@icons/minorDisabled";
import UseBaseController from "./base.controller";
import { Card } from "./module/card/card";
import { useEffect } from "react";
import * as Styled from "./base.styles";

const Base = () => {
  const { Actions, States } = UseBaseController();

  useEffect(() => {
    Actions.addTotalPrice();
    Actions.onManageMealSize();
  });

  return (
    <BaseView haveTicket={true}>
      <Styled.Container>
        <Styled.MealDescriptionContainer>
          <Styled.RestaurantContainer>
            <img src={MatsuriLogo} alt="branding" />
            <span>Matsuri Concept</span>
          </Styled.RestaurantContainer>
          <Styled.Meal>
            <Styled.MealDescription>
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
                    <Styled.MealCountContainer>
                      <Trash onClick={Actions.onRemoveMeal} />
                      <span>{States.mealCount}</span>
                      <Plus onClick={Actions.onAddMeal} />
                    </Styled.MealCountContainer>
                  )}
                  {States.mealCount > 1 && (
                    <Styled.MealCountContainer>
                      <Minor onClick={Actions.onRemoveMeal} />
                      <span>{States.mealCount}</span>
                      <Plus onClick={Actions.onAddMeal} />
                    </Styled.MealCountContainer>
                  )}
                </div>
              </div>
            </Styled.MealDescription>

            <Styled.MealImageContainer>
              <img src={MealImage} alt="meal" />
            </Styled.MealImageContainer>
          </Styled.Meal>
        </Styled.MealDescriptionContainer>
        <Styled.CardLine />

        <Styled.CardBase>
          <Card.Container>
            <Card.Title text="qual o tamanho?" withFlag />
            <Card.Subtitle text="escolha 1" />
            <Card.Content>
              <Styled.FoodSizeContainer>
                <Styled.FoodSizeFirstItem>
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
                </Styled.FoodSizeFirstItem>

                <Styled.FoodSizeSecondItem>
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
                </Styled.FoodSizeSecondItem>
              </Styled.FoodSizeContainer>
            </Card.Content>
          </Card.Container>
        </Styled.CardBase>

        <Styled.CardLine />

        <Styled.CardBase>
          <Card.Container>
            <Card.Title text="vai querer bebida?" withFlag={false} />
            <Card.Subtitle text="escolha quantos quiser" />
            <Card.Content>
              <Styled.BeverageContainer>
                <Styled.BeverageItem>
                  <label>
                    {States.coke.count === 0 && (
                      <Styled.MealCountContainer>
                        <MinorDisabled />
                        <span>{States.coke.count}</span>
                        <Plus onClick={() => Actions.onAddBeverage("coke")} />
                      </Styled.MealCountContainer>
                    )}
                    {States.coke.count === 1 && (
                      <Styled.MealCountContainer>
                        <Trash
                          onClick={() => Actions.onRemoveBeverage("coke")}
                        />
                        <span>{States.coke.count}</span>
                        <Plus onClick={() => Actions.onAddBeverage("coke")} />
                      </Styled.MealCountContainer>
                    )}
                    {States.coke.count > 1 && (
                      <Styled.MealCountContainer>
                        <Minor
                          onClick={() => Actions.onRemoveBeverage("coke")}
                        />
                        <span>{States.coke.count}</span>
                        <Plus onClick={() => Actions.onAddBeverage("coke")} />
                      </Styled.MealCountContainer>
                    )}
                    <span>coca-cola</span>
                  </label>
                  <div>
                    <span>
                      +R${" "}
                      {States.coke.count === 0
                        ? States.coke.basePrice
                        : States.coke.price}
                    </span>
                  </div>
                </Styled.BeverageItem>

                <Styled.BeverageItem>
                  <label>
                    {States.juice.count === 0 && (
                      <Styled.MealCountContainer>
                        <MinorDisabled />
                        <span>{States.juice.count}</span>
                        <Plus onClick={() => Actions.onAddBeverage("juice")} />
                      </Styled.MealCountContainer>
                    )}
                    {States.juice.count === 1 && (
                      <Styled.MealCountContainer>
                        <Trash
                          onClick={() => Actions.onRemoveBeverage("juice")}
                        />
                        <span>{States.juice.count}</span>
                        <Plus onClick={() => Actions.onAddBeverage("juice")} />
                      </Styled.MealCountContainer>
                    )}
                    {States.juice.count > 1 && (
                      <Styled.MealCountContainer>
                        <Minor
                          onClick={() => Actions.onRemoveBeverage("juice")}
                        />
                        <span>{States.juice.count}</span>
                        <Plus onClick={() => Actions.onAddBeverage("juice")} />
                      </Styled.MealCountContainer>
                    )}
                    <span>suco prats laranja</span>
                  </label>
                  <div>
                    <span>
                      +R${" "}
                      {States.juice.count === 0
                        ? States.juice.basePrice
                        : States.juice.price}
                    </span>
                  </div>
                </Styled.BeverageItem>

                <Styled.BeverageItem>
                  <label>
                    {States.water.count === 0 && (
                      <Styled.MealCountContainer>
                        <MinorDisabled />
                        <span>{States.water.count}</span>
                        <Plus onClick={() => Actions.onAddBeverage("water")} />
                      </Styled.MealCountContainer>
                    )}
                    {States.water.count === 1 && (
                      <Styled.MealCountContainer>
                        <Trash
                          onClick={() => Actions.onRemoveBeverage("water")}
                        />
                        <span>{States.water.count}</span>
                        <Plus onClick={() => Actions.onAddBeverage("water")} />
                      </Styled.MealCountContainer>
                    )}
                    {States.water.count > 1 && (
                      <Styled.MealCountContainer>
                        <Minor
                          onClick={() => Actions.onRemoveBeverage("water")}
                        />
                        <span>{States.water.count}</span>
                        <Plus onClick={() => Actions.onAddBeverage("water")} />
                      </Styled.MealCountContainer>
                    )}
                    <span>água sem gás</span>
                  </label>
                  <div>
                    <span>
                      +R${" "}
                      {States.water.count === 0
                        ? States.water.basePrice
                        : States.water.price}
                    </span>
                  </div>
                </Styled.BeverageItem>
              </Styled.BeverageContainer>
            </Card.Content>
          </Card.Container>
        </Styled.CardBase>

        <Styled.CardLine />

        <Styled.CardBase>
          <Card.Container>
            <Card.Title text="precisa de talher?" withFlag={false} />
            <Card.Subtitle text="escolha até um" />
            <Card.Content>
              <Styled.CutleryContainer>
                <Styled.CutleryItem>
                  <label>
                    <Radio
                      checked={States.cutleryItem === "hashi"}
                      name="cutlery"
                      onClick={() => Actions.onChangeCutlery("hashi")}
                    />
                    <span>hashi</span>
                  </label>
                </Styled.CutleryItem>
                <Styled.CutleryItem>
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
                </Styled.CutleryItem>
              </Styled.CutleryContainer>
            </Card.Content>
          </Card.Container>
        </Styled.CardBase>

        <Styled.CardLine />

        <Styled.CardBase>
          <Card.Container>
            <Card.Title text="mais alguma coisa?" withFlag={false} />
            <Card.Subtitle text="escolha até 2" />
            <Card.Content>
              <Styled.ExtraContainer>
                <Styled.ExtraItem>
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
                </Styled.ExtraItem>
                <Styled.ExtraItem>
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
                </Styled.ExtraItem>
              </Styled.ExtraContainer>
            </Card.Content>
          </Card.Container>
        </Styled.CardBase>

        <Styled.CardLine />
        <Styled.TextAreaContainer>
          <textarea
            placeholder={`alguma observação do item? • opcional \nex: tirar algum ingrediente, ponto do prato`}
          ></textarea>
        </Styled.TextAreaContainer>
      </Styled.Container>
    </BaseView>
  );
};

export default Base;
