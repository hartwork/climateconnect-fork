import {
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CloseIcon from "@material-ui/icons/Close";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import FilterSearchBar from "../filter/FilterSearchBar";

const useStyles = makeStyles((theme) => {
  return {
    wrapper: (props) => ({
      margin: "0 auto",
      display: props.flexWrapper ? "flex" : "block",
      marginTop: props.marginTop ? theme.spacing(8) : 0,
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(4),
        display: "block",
      },
    }),
    list: {
      display: "inline-block",
      maxWidth: "50%",
      [theme.breakpoints.down("md")]: {
        marginLeft: theme.spacing(0),
      },
    },
    subList: (props) => {
      return {
        display: "inline-block",
        marginTop: theme.spacing(props.offset * 8),
        verticalAlign: "top",
        maxWidth: "50%",
      };
    },
    narrowScreenSubList: {
      display: "block",
      padding: 0,
      width: "90%",
      marginLeft: "10%",
    },

    listItem: {
      border: "1px solid black",
      borderTop: 0,
      height: theme.spacing(8),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(1),
    },

    subListItem: {
      borderLeft: 0,
    },

    firstItem: {
      borderTop: "1px solid black",
    },

    narrowScreenSubListItem: {
      borderLeft: "1px solid black",
      borderTop: 0,
    },

    borderLeft: {
      borderLeft: "1px solid black",
    },

    icon: {
      margin: "0 auto",
    },
    expanded: {
      color: "white",
    },
    hidden: {
      display: "none",
    },
    selectedWrapper: {
      display: "inline-block",
      verticalAlign: "top",
      marginLeft: theme.spacing(16),
      [theme.breakpoints.down("md")]: {
        marginLeft: theme.spacing(2),
      },
    },
    narrowScreenSelectedWrapper: {
      marginLeft: theme.spacing(2),
      display: "block",
      margin: "0 auto",
      textAlign: "center",
    },
    selectedItemsHeader: {
      fontWeight: "bold",
    },
    selectedItem: {
      background: theme.palette.primary.main,
      color: "white",
      marginBottom: theme.spacing(1),
      borderTop: "1px solid black",
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: "white",
      },
    },
    firstSelectedItem: {
      border: "5px solid black",
    },
    selectedItemIcon: {
      paddingLeft: theme.spacing(2),
      color: "red",
    },
    listWrapper: {
      display: "inline-block",
      width: 700,
      [theme.breakpoints.down("md")]: {
        width: 650 - theme.spacing(8),
        margin: "0 auto",
      },
      [theme.breakpoints.down("xs")]: {
        width: "auto",
        margin: "0 auto",
      },
    },
    narrowScreenListWrapper: {
      maxWidth: 650 - theme.spacing(8),
      width: "auto",
      display: "block",
      margin: "0 auto",
    },

    selectedList: {
      maxWidth: 350,
      margin: "0 auto",
    },

    divider: {
      backgroundColor: "black",
      marginBottom: theme.spacing(1),
    },

    subListLastItem: {
      borderBottom: 0,
    },

    // Ensure there's border on the last sublist item,
    // on the last parent list item. See GitHub issue #312
    finalListItem: {
      borderBottom: "1px solid black",
    },

    itemUnderExpandedSubList: {
      borderTop: "1px solid black",
    },
  };
});

export default function MultiLevelSelector({
  dragAble,
  isInPopup,
  itemNamePlural,
  itemsToSelectFrom,
  maxSelections,
  selected,
  setSelected,
}) {
  const [expanded, setExpanded] = React.useState(null);

  const useStylesProps = {
    marginTop: !isInPopup,
    flexWrapper: !isInPopup,
  };

  const classes = useStyles(useStylesProps);

  const onClickExpand = (key) => {
    if (expanded === key) setExpanded(null);
    else setExpanded(key);
  };

  const onClickSelect = (item) => {
    if (selected.length >= maxSelections) {
      alert("You can only choose up to " + maxSelections + " " + itemNamePlural);
    } else {
      setSelected([...selected, item]);
    }
  };

  const onClickUnselect = (item) => {
    // TODO(Piper): also have to update persisted URL query param,
    // and trigger state flow through the whole tree again.

    // When dismissing a selected filter chip, we also want to update the
    // window state to reflect the currently active filters, and fetch
    // the updated data from the server
    // persistFiltersInURL(updatedFilters);
    // onDismissOfItem(type, updatedFilters, isSmallScreen);

    setSelected(
      selected
        .slice(0, selected.indexOf(item))
        .concat(selected.slice(selected.indexOf(item) + 1, selected.length))
    );
  };

  const moveItem = (sourcePosition, destinationPosition) => {
    const ret = selected;
    const [removed] = ret.splice(sourcePosition, 1);
    ret.splice(destinationPosition, 0, removed);
    setSelected(ret);
  };

  const isNarrowScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  // TODO(Piper): force selected items
  // based on query param --
  console.log("selected items:");
  // console.log(itemsToSelectFrom);

  // selected becomes the array of items that
  // are selected
  console.log(selected);

  return (
    <>
      <div className={classes.wrapper}>
        {(isNarrowScreen || isInPopup) && (
          <>
            <SelectedList
              selected={selected}
              itemNamePlural={itemNamePlural}
              maxSelections={maxSelections}
              onClickUnselect={onClickUnselect}
              className={`${classes.selectedWrapper} ${
                (isNarrowScreen || isInPopup) && classes.narrowScreenSelectedWrapper
              }`}
              dragAble={dragAble}
              moveItem={moveItem}
            />
            {selected.length > 0 && <Divider className={classes.divider} />}
          </>
        )}
        <ListToChooseWrapper
          itemsToSelectFrom={itemsToSelectFrom}
          onClickExpand={onClickExpand}
          expanded={expanded}
          onClickSelect={onClickSelect}
          selected={selected}
          isNarrowScreen={isNarrowScreen}
          isInPopup={isInPopup}
          className={classes.listWrapper}
        />
        {!(isNarrowScreen || isInPopup) && (
          <SelectedList
            selected={selected}
            itemNamePlural={itemNamePlural}
            maxSelections={maxSelections}
            onClickUnselect={onClickUnselect}
            className={classes.selectedWrapper}
            dragAble={dragAble}
            moveItem={moveItem}
          />
        )}
      </div>
    </>
  );
}

function ListToChooseWrapper({
  itemsToSelectFrom,
  onClickExpand,
  expanded,
  onClickSelect,
  selected,
  className,
  isInPopup,
  isNarrowScreen,
}) {
  const classes = useStyles();

  // The first section should be the initial tab value
  const [searchValue, setSearchValue] = React.useState("");
  const handleSearchBarChange = (event) => setSearchValue(event?.target?.value);

  function filteredLists({ searchValue, itemsToSelectFrom }) {
    if (searchValue == "" || searchValue == null) {
      return itemsToSelectFrom;
    }
    return (
      itemsToSelectFrom
        // remove all inner items that do not match the search query
        .map((item) => {
          let itemCopy = Object.assign({}, item);
          itemCopy.subcategories = item.subcategories.filter((innerItem) => {
            return innerItem.name.toLowerCase().includes(searchValue.toLowerCase());
          });
          return itemCopy;
        })
        // remove all items who do not match the search, or have no inner matches
        .filter((item) => {
          return (
            item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.subcategories.length > 0
          );
        })
    );
  }

  return (
    <Container>
      <div className={classes.searchBarContainer}>
        <FilterSearchBar
          label="Search for keywords"
          className={classes.searchBar}
          onChange={handleSearchBarChange}
          value={searchValue}
        />
        <ListToChooseFrom
          itemsToSelectFrom={filteredLists({ searchValue, itemsToSelectFrom })}
          onClickExpand={onClickExpand}
          expanded={expanded}
          onClickSelect={onClickSelect}
          selected={selected}
          className={`${(isNarrowScreen || isInPopup) && classes.narrowScreenListWrapper}`}
          isInPopup={isInPopup}
          isNarrowScreen={isNarrowScreen}
        />
      </div>
    </Container>
  );
}

function SelectedList({
  className,
  dragAble,
  itemNamePlural,
  maxSelections,
  moveItem,
  onClickUnselect,
  selected,
}) {
  const classes = useStyles({});

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) return;

    moveItem(result.source.index, result.destination.index);
  };

  // console.log("selected list");
  // console.log(itemNamePlural);
  // console.log(itemNamePlural);

  if (dragAble) {
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <List
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={classes.selectedList}
            >
              {selected?.map((item, index) => {
                return (
                  <Draggable key={item.id} draggableId={"draggable" + item.id} index={index}>
                    {(provided) => {
                      return (
                        <ListItem
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          key={index}
                          button
                          className={`
                            ${classes.listItem}
                            ${index == 0 && classes.firstItem}
                            ${classes.selectedItem}
                            ${index == 0 && classes.firstSelectedItem}
                          `}
                          onClick={() => onClickUnselect(item)}
                          disableRipple
                        >
                          <ListItemText>{item.name}</ListItemText>
                          <ListItemIcon className={classes.selectedItemIcon}>
                            <CloseIcon />
                          </ListItemIcon>
                        </ListItem>
                      );
                    }}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    );
  }

  // debugger;
  return (
    <div className={className}>
      <Typography component="h2" variant="h5" className={classes.selectedItemsHeader}>
        {selected.length > 0
          ? "Selected " + itemNamePlural
          : "Select between 1 and " + maxSelections + " " + itemNamePlural + "!"}
      </Typography>
      {/* Shows the list of selected items. For example on /browse when you select "Categories" */}
      <List className={classes.selectedList}>
        {selected?.map((item, index) => (
          // Only show the item if it's valid
          <ListItem
            key={index}
            button
            className={`${classes.listItem} ${index == 0 && classes.firstItem} ${
              classes.selectedItem
            }`}
            onClick={() => onClickUnselect(item)}
            disableRipple
          >
            {/* <ListItemText>{JSON.stringify(item)}</ListItemText> */}
            <ListItemText>{item.name}</ListItemText>
            <ListItemIcon className={classes.selectedItemIcon}>
              <CloseIcon />
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

function ListToChooseFrom({
  className,
  expanded,
  isInPopup,
  isNarrowScreen,
  isSubList,
  itemsToSelectFrom,
  onClickExpand,
  onClickSelect,
  parentEl,
  parentList,
  selected,
}) {
  const index = isSubList ? parentList.indexOf(parentEl) : 0;
  const subListHeightCorrection = isSubList
    ? Math.min(index, Math.max(0, itemsToSelectFrom.length - parentList.length + index))
    : 0;

  const offset = isNarrowScreen || isInPopup ? 0 : index - subListHeightCorrection;
  const classes = useStyles({ offset: offset });
  return (
    <>
      <List
        className={`${!isSubList && classes.list}
                    ${
                      isSubList &&
                      (expanded === parentEl.key
                        ? isNarrowScreen || isInPopup
                          ? classes.narrowScreenSubList
                          : classes.subList
                        : classes.hidden)
                    }
                    ${className}`}
      >
        {itemsToSelectFrom.map((item, index) => {
          // If current last item, is the last subcategory item
          // in the last item in the outer list, then ignore our
          // normal border styling, and paint the 1px bottom border.
          let isFinalListItem = false;
          if (index === itemsToSelectFrom.length - 1) {
            const lastParentListItem = parentList && parentList[parentList.length - 1];
            const lastParentListItemSubcategories = lastParentListItem?.subcategories;
            const finalItem =
              lastParentListItemSubcategories &&
              lastParentListItemSubcategories[lastParentListItemSubcategories.length - 1];

            // Does the current item match its parent's last item?
            if (item.name === finalItem?.name) {
              isFinalListItem = true;
            }
          }

          return (
            <React.Fragment key={item.key}>
              <ListItem
                button
                disabled={selected.filter((s) => s.key === item.key).length === 1}
                classes={{
                  root: `${classes.listItem}
                        ${index == 0 && classes.firstItem}
                        ${isSubList && classes.subListItem}
                        ${
                          isSubList &&
                          (isNarrowScreen || isInPopup) &&
                          classes.narrowScreenSubListItem
                        }

                        ${
                          isSubList &&
                          index === itemsToSelectFrom.length - 1 &&
                          (isNarrowScreen || isInPopup) &&
                          // If the list item is the absolute last
                          // item in a nested list, then still paint
                          // its bottom border.
                          (isFinalListItem ? classes.finalListItem : classes.subListLastItem)
                        }

                        ${
                          !isSubList &&
                          itemsToSelectFrom[index - 1] &&
                          expanded === itemsToSelectFrom[index - 1].key &&
                          (isNarrowScreen || isInPopup) &&
                          classes.itemUnderExpandedSubList
                        }
                        ${isSubList && index >= parentList.length && classes.borderLeft}`,
                  selected: classes.expanded,
                }}
                selected={expanded === item.key}
                onClick={() => {
                  if (item.subcategories && item.subcategories.length)
                    return onClickExpand(item.key);
                  else return onClickSelect(item);
                }}
                disableRipple
              >
                <ListItemText primary={item.name} />
                {item.subcategories && item.subcategories.length ? (
                  <ListItemIcon>
                    {isNarrowScreen || isInPopup ? (
                      expanded === item.key ? (
                        <ExpandLessIcon
                          className={`${classes.icon} ${expanded === item.key && classes.expanded}`}
                        />
                      ) : (
                        <ExpandMoreIcon
                          className={`${classes.icon} ${expanded === item.key && classes.expanded}`}
                        />
                      )
                    ) : (
                      <ArrowForwardIosIcon
                        className={`${classes.icon} ${expanded === item.key && classes.expanded}`}
                      />
                    )}
                  </ListItemIcon>
                ) : (
                  ""
                )}
              </ListItem>
              {/* Render the inner list items, if an outer list item has subcategories associated */}
              {(isNarrowScreen || isInPopup) && item.subcategories && item.subcategories.length ? (
                <ListToChooseFrom
                  expanded={expanded}
                  isInPopup={isInPopup}
                  isNarrowScreen={isNarrowScreen}
                  isSubList
                  itemsToSelectFrom={item.subcategories}
                  key={item.key + "innersublist"}
                  onClickExpand={onClickExpand}
                  onClickSelect={onClickSelect}
                  parentEl={item}
                  parentList={itemsToSelectFrom}
                  selected={selected}
                />
              ) : (
                <></>
              )}
            </React.Fragment>
          );
        })}
      </List>
      {/* Render the inner list items differently if not a narrow screen, or in a popup */}
      {!(isNarrowScreen || isInPopup) &&
        itemsToSelectFrom.map((item) => {
          return item.subcategories && item.subcategories.length ? (
            <ListToChooseFrom
              isSubList
              parentEl={item}
              parentList={itemsToSelectFrom}
              itemsToSelectFrom={item.subcategories}
              key={item.key + "outersublist"}
              expanded={expanded}
              onClickExpand={onClickExpand}
              selected={selected}
              onClickSelect={onClickSelect}
            />
          ) : null;
        })}
    </>
  );
}
