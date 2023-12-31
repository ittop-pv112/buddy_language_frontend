import BigRobot from "../images/ImgSetting/BigRobot.png";
import Arrow from "../images/Img/Arrow.png";
import Robot from "../images/Img/Robot.png";
import { StProps } from "../types";
import { Link } from 'react-router-dom';
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Box,
  Slider,
  Snackbar
} from "@mui/material";

import {
  Property1Default,
  ImgBigRobot,
  TopBar,
  Content,
  IcLeft,
  Shape,
  TitleSetting,
  IconBox,
  IconRobot,
  ImgRobot,
  SectionTitle,
  Text,
  Title,
  ListSounds,
  BoxIconSound1,
  IconSound1,
  BoxTitleSound1,
  TitleVoice,
  Item1,
  BoxIconSound2,
  IconSound2,
  BoxTitleSound2,
  Item2,
  SectionRoleBot,
  TitleRoleBot,
  SectionRoleBot1,
  TitleRole,
  InputRoleBot,
  SectionRoleBot2,
  GroupDescriptionRole,
  DescriptionRole,
  GroupButton,
  TitleButtonSave,
  ButtonSave,
  SelectLanguage,
  SectionLanguage,
  LanguageTitle,
  SectionVoiceSpeed,
  BoxVoiceSpeed,
  SectionRoleBot3,
  ApplyingExistingRoles,
} from "./StyleSettings";
import { useEffect, useMemo, useState, SyntheticEvent } from "react";
import { getRole, getRoleAll, getUserByTelegramId, updateUserPreferences } from "../apiService";
import { Language, Role, Voice, UpdateUserPreferencesRequest, User, TtsSpeed } from "../apiClient";
import audio_man from "../voice/telegram_audio_man.ogg";
import audio_woman from "../voice/telegram_audio_woman.ogg";

export default function Settings(props: StProps): JSX.Element {
  const [nativeLanguage, setNativeLanguage] = useState("");
  const [learningLanguage, setLearningLanguage] = useState("");
  const [voiceType, setVoiceType] = useState("");
  const [selectedSpeed, setSelectedSpeed] = useState(0);
  const [titleRole, setTitleRole] = useState("");
  const [descriptionRole, setDescriptionRole] = useState("");
  const [allRoles, setAllRoles] = useState<Role[]>([]);
  const [selectedRoleName, setSelectedRoleName] = useState("");
  const [user, setUser] = useState<User>();
  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [openSaveSuccess, setOpenSaveSuccess] = useState(false);
  const marks = [
    {
      value: 0,
      label: "0.5x",
    },
    {
      value: 1,
      label: "1x",
    },
    {
      value: 2,
      label: "1.5x",
    },
    {
      value: 3,
      label: "2x",
    },
    {
      value: 4,
      label: "2.5x",
    },
  ];

  const languages = useMemo(() => [
    { name: "Английский", value: Language.NUMBER_0 },
    { name: "Русский", value: Language.NUMBER_1 },
    { name: "Арабский", value: Language.NUMBER_2 },
    { name: "Китайский традиционный", value: Language.NUMBER_3 },
    { name: "Китайский упрощенный", value: Language.NUMBER_4 },
    { name: "Английский Австралия", value: Language.NUMBER_5 },
    { name: "Английский Канада", value: Language.NUMBER_6 },
    { name: "Английский Индия", value: Language.NUMBER_7 },
    { name: "Английский Великобритания", value: Language.NUMBER_8 },
    { name: "Французский", value: Language.NUMBER_9 },
    { name: "Французский Канада", value: Language.NUMBER_10 },
    { name: "Немецкий", value: Language.NUMBER_11 },
    { name: "Хинди Индия", value: Language.NUMBER_12 },
    { name: "Тамильский Индия", value: Language.NUMBER_13 },
    { name: "Итальянский", value: Language.NUMBER_14 },
    { name: "Японский", value: Language.NUMBER_15 },
    { name: "Корейский", value: Language.NUMBER_16 },
    { name: "Малайский", value: Language.NUMBER_17 },
    { name: "Норвежский", value: Language.NUMBER_18 },
    { name: "Португальский", value: Language.NUMBER_19 },
    { name: "Испанский", value: Language.NUMBER_20 },
    { name: "Испанский Мексика", value: Language.NUMBER_21 },
    { name: "Шведский", value: Language.NUMBER_22 },
    { name: "Вьетнамский", value: Language.NUMBER_23 },
    { name: "Казахский", value: Language.NUMBER_24 },
    { name: "Индонезийский", value: Language.NUMBER_25 },], []);

  const voices = useMemo(() => [
    {
      name: "male",
      value: Voice.NUMBER_0
    },
    {
      name: "female",
      value: Voice.NUMBER_1
    },], []);

  const handleChangeRole = (event: SelectChangeEvent) => {
    const nameSelectedRole = event.target.value;
    const selRole = allRoles.find(role => role.name === nameSelectedRole);
    if (selRole) {
      if (selRole.name) {
        setSelectedRoleName(selRole.name);
        setTitleRole(selRole.name);
      }
      if (selRole.prompt) setDescriptionRole(selRole.prompt);
    }
  };

  const handleChangeSpeed = (event: Event, activeThumb: number | number[]) => {
    console.log(event);
    setSelectedSpeed(activeThumb as number);
  };

  function valueLabelFormat(value: number) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }

  const handleNativeLanguageChange = (event: SelectChangeEvent) => {
    const selectedLanguage = event.target.value as string;
    if (selectedLanguage !== learningLanguage) {
      setNativeLanguage(selectedLanguage);
    } else {
      console.log("Родной язык не может быть изучаемым");
    }
  };

  const handleLearningLanguageChange = (event: SelectChangeEvent) => {
    const selectedLanguage = event.target.value as string;
    // Проверяем, чтобы выбранный язык для изучения не совпадал с выбранным родным языком
    if (selectedLanguage !== nativeLanguage) {
      setLearningLanguage(selectedLanguage);
    } else {
      console.log("Изучаемый язык не может быть родным");
    }

    // Дополнительная проверка на совпадение языков
    if (selectedLanguage === nativeLanguage) {
      console.log("Родной и изучаемый языки не могут совпадать");
    }
  };

  const handleVoiceTypeChange = (selectedVoice: string) => {
    setVoiceType(selectedVoice);
    if (selectedVoice === "female") {
      const audio_w = new Audio(audio_woman);
      audio_w.play();
    } else {
      const audio_m = new Audio(audio_man);
      audio_m.play();
    }
  };

  const onSaveUsersSetings = async () => {

    const newLearningLanguage = languages.find((language) => language.name === learningLanguage);
    const newNativLanguage = languages.find((language) => language.name === nativeLanguage);
    const newSpeed: TtsSpeed = selectedSpeed;
    const newVoice = voices.find((voice) => voice.name === voiceType);
    const newRoleId = allRoles.find((role) => role.name === selectedRoleName)?.id;

    if (user && newNativLanguage && newLearningLanguage && newVoice && newRoleId) {
      const newUserPreferences: UpdateUserPreferencesRequest = {
        id: user.id,
        nativeLanguage: newNativLanguage.value,
        targetLanguage: newLearningLanguage.value,
        selectedSpeed: newSpeed,
        selectedVoice: newVoice.value,
        assistantRoleId: newRoleId,
      };
      console.log(newUserPreferences);

      try {
        const updateUser = await updateUserPreferences(props.initData, newUserPreferences);
        setOpenSaveSuccess(true);
        // setShowSuccessMessage(true);
        // setTimeout(() => {
        //   setShowSuccessMessage(false); // скрываем уведомление через несколько секунд
        // }, 5000);
        console.log(updateUser);
        console.log("Настройки успешно сохранены");
      } catch (error) {
        console.error('Ошибка при обновлении пользовательских настроек:', error);
      }
    } else {
      console.error(`Некорректные данные для обновления пользовательских настроек.`);
    }

  };

  const handleSaveSuccessClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
      console.log(event);
    }
    setOpenSaveSuccess(false); // Закрываем уведомление
  };

  useEffect(() => {
    const fetchCurrentUsersSettings = async () => {
      try {
        const user = await getUserByTelegramId(props.initData, props.TelegramId);
        setUser(user);
        //установка языков
        const usersNativeLanguage = user.userPreferences.nativeLanguage;
        const currentNativeLanguage = languages.find((language) => language.value === usersNativeLanguage);
        if (currentNativeLanguage) {
          setNativeLanguage(currentNativeLanguage.name);
        }
        const usersLearningLanguage = user.userPreferences.targetLanguage;
        const currentLearningLanguage = languages.find((language) => language.value === usersLearningLanguage);
        if (currentLearningLanguage) {
          setLearningLanguage(currentLearningLanguage.name);
        }

        //установка голоса
        const usersBotVoice = user.userPreferences.selectedVoice;
        const currentVoice = voices.find((voice) => voice.value === usersBotVoice);
        if (currentVoice) {
          setVoiceType(currentVoice.name);
        }

        //установка скорости речи
        const usersTtsSpeed = user.userPreferences.selectedSpeed;
        const currentTtsSpeed = usersTtsSpeed.valueOf();
        setSelectedSpeed(currentTtsSpeed);

        //установка роли

        //получение всех существующих ролей
        const roles = await getRoleAll(props.initData);
        setAllRoles(roles);

        if (user.userPreferences.assistantRole) {
          const roleName = user.userPreferences.assistantRole.name;
          if (roleName) {
            setTitleRole(roleName);
            setSelectedRoleName(roleName)
          }

          const roleDescription = user.userPreferences.assistantRole.prompt;
          if (roleDescription) setDescriptionRole(roleDescription);
        }
        else {
          const idRole = user.userPreferences.assistantRoleId;
          const role = await getRole(props.initData, idRole);

          if (role.name) {
            setTitleRole(role.name);
            setSelectedRoleName(role.name);
          }
          if (role.prompt) setDescriptionRole(role.prompt);
        }

      } catch (error) {
        console.error('Error fetching user`s settings:', error);
      }
    };

    fetchCurrentUsersSettings();
  }, [props.TelegramId, props.initData, voices, languages]);

  return (
    <Property1Default className={props.TelegramId}>
      <ImgBigRobot src={BigRobot} loading="lazy" alt={"Big Robot"} />
      <TopBar>
        <Content>
          <Link to="/">
            <IcLeft>
              <Shape src={Arrow} loading="lazy" alt={"Arrow"} />
            </IcLeft>
          </Link>
          <TitleSetting>{`Настройки`}</TitleSetting>
          <IconBox>
            <IconRobot>
              <ImgRobot src={Robot} loading="lazy" alt={"Robot Icon"} />
            </IconRobot>
          </IconBox>
        </Content>
      </TopBar>
      <SectionTitle>
        <Text>
          <Title>{`Голосовой выбор бота`}</Title>
        </Text>
      </SectionTitle>
      <ListSounds>
        <Item1 onClick={() => handleVoiceTypeChange("male")}>
          <BoxIconSound1
            style={{
              backgroundColor: voiceType === "male" ? "#204981" : "transparent",
            }}
          >
            <IconSound1>{`🔊`}</IconSound1>
          </BoxIconSound1>
          <BoxTitleSound1
            style={{
              textDecorationColor:
                voiceType === "male" ? "#7FFFD4" : "transparent",
            }}
          >
            <TitleVoice>{`Мужской голос`}</TitleVoice>
          </BoxTitleSound1>
        </Item1>
        <div style={{ borderBottom: "1px solid #B1BCCD", width: "100%" }} />
        <Item2 onClick={() => handleVoiceTypeChange("female")}>
          <BoxIconSound2
            style={{
              backgroundColor:
                voiceType === "female" ? "#204981" : "transparent",
            }}
          >
            <IconSound2>{`🔊`}</IconSound2>
          </BoxIconSound2>
          <BoxTitleSound2>
            <TitleVoice>{`Женский голос`}</TitleVoice>
          </BoxTitleSound2>
        </Item2>
        <div style={{ borderBottom: "1px solid #B1BCCD", width: "100%" }} />
      </ListSounds>
      <SectionVoiceSpeed>
        <Title>{`Скорость голоса`}</Title>
        <BoxVoiceSpeed>
          <Slider
            aria-label="Restricted values"
            valueLabelFormat={valueLabelFormat}
            step={null}
            valueLabelDisplay="off"
            marks={marks}
            max={4}
            value={selectedSpeed}
            onChange={handleChangeSpeed}
          />
        </BoxVoiceSpeed>
      </SectionVoiceSpeed>
      <SectionRoleBot>
        <TitleRoleBot>
          <Title>{`Выбрать роль бота`}</Title>
        </TitleRoleBot>
      </SectionRoleBot>
      <SectionRoleBot1>
        <TitleRole>{`Название роли`}</TitleRole>
        <InputRoleBot placeholder="Ввод роли бота" value={titleRole} disabled />
      </SectionRoleBot1>
      <SectionRoleBot2>
        <TitleRole>{`Описание роли`}</TitleRole>
        <GroupDescriptionRole>
          <DescriptionRole placeholder="Ввод описания роли" value={descriptionRole} disabled />
        </GroupDescriptionRole>
      </SectionRoleBot2>
      <SectionRoleBot3>
        <TitleRole>{`Существующие роли`}</TitleRole>
        <ApplyingExistingRoles>
          <FormControl fullWidth>
            <InputLabel>Роли</InputLabel>
            <Select
              id="SelectRole"
              value={selectedRoleName}
              onChange={handleChangeRole}
            >
              {allRoles.map(role =>
                <MenuItem value={role.name} key={role.id}>{role.name}</MenuItem>)}
            </Select>
          </FormControl>
        </ApplyingExistingRoles>
      </SectionRoleBot3>
      <SectionLanguage>
        <LanguageTitle>
          <Title>{`Выбрать язык`}</Title>
        </LanguageTitle>
      </SectionLanguage>
      <SelectLanguage>
        <Box
          sx={{
            display: "inline-flex",
            position: "relative",
            border: "#001434",
            isolation: "isolate",
            flex: 1,
            marginRight: "4px",
          }}
        >
          <FormControl fullWidth>
            <InputLabel>Родной язык</InputLabel>
            <Select
              id="SelectNativeLangue"
              value={nativeLanguage}
              onChange={handleNativeLanguageChange}
            >
              {languages.map(lang =>
                <MenuItem value={lang.name} key={lang.value}>{lang.name}</MenuItem>)}
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "inline-flex",
            position: "relative",
            border: "#001434",
            isolation: "isolate",
            flex: 1,
            marginLeft: "4px",
          }}
        >
          <FormControl fullWidth>
            <InputLabel>Изучаемый язык</InputLabel>
            <Select
              id="SelectStudingLanguage"
              value={learningLanguage}
              onChange={handleLearningLanguageChange}
            >
              {languages.map(lang =>
                <MenuItem value={lang.name} disabled={nativeLanguage === lang.name} key={lang.value}>{lang.name}</MenuItem>)}
            </Select>
          </FormControl>
        </Box>
      </SelectLanguage>
      <Snackbar
        open={openSaveSuccess}
        autoHideDuration={6000}
        onClose={handleSaveSuccessClose}
        message="Настройки успешно сохранены"
      />
      {/* {showSuccessMessage && (
          <div style={{ backgroundColor: 'green', color: 'white', padding: '10px', margin: '10px' }}>
            Настройки успешно сохранены
          </div>
        )} */}
      <GroupButton>
        <ButtonSave onClick={onSaveUsersSetings} variant="contained" >
          <TitleButtonSave >{`Сохранить`}</TitleButtonSave>
        </ButtonSave>
      </GroupButton>
    </Property1Default>
  );
}
