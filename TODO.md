## Calculators
1. Perhaps combine these onto one page inside a table?
* [x] Dice Probabilities
* [x] Sailing Duration and Cargo Tranport Revenue
* Foot Travel Duration
* [x] Horizon Calculator
* [x] Level Demographics
* [x] Crafting Duration
* [x] Bounty Reward
* [x] Currency Weight
* [x] n CR x Creatures to Level y
* Movement speed to other velocities
* [x] Training
    * [x] Training Successes Needed
    * [x] Training Roller
* Turning a Spell into a Magic Item

## Homebrew
* [x] Adjusting Races
* [x] Animal Husbandry
* [x] Arrows
* [x] Beer Brewing
* [x] Casting Spells of a Higher Level
* [x] Crafting
* [x] Divine Ranks and Powers
* [x] Enlarge/Reduce Spell
* [x] Fall Damage
* [x] Flanking
* [x] Foraging/Harvesting
* [x] Gemstones
* [x] Identifying a Spell Being Cast
* [x] Improving Ability Scores
* [x] Intelligence
* [x] Item Prices
* Kibble's Crafting
* [x] Medidcine Check for Determining Health
* [x] Negotiating a Price
* [x] Ship Navigation
* Sprint
    * Add a limit or exhaustion or something
* [x] Street Drugs
* [x] Tavern Games
* [x] The Economy
* [x] Training a Skill
* [x] Traveling

## Generators
* Battle Maps
    * **Merging canvases**
* Random Encounter Generator
    * Functions
        * rollTable()
            * **Need to handle looping through each row**
                * Pulling first values and parsing in to a number range
    * [x] Combat Encounters
    * [x] Non-combat Encounters
        * Incoporate extra tables
        * Open Water
            * [Mysterious Islands](https://5e.tools/variantrules.html#mysterious%20islands_gos)
            * [x] [Random Ships](https://5e.tools/variantrules.html#random%20ships_gos)
            * [Ocean Environs](https://5e.tools/variantrules.html#ocean%20environs_gos)
                * Blue Holes
            * [Hazards](https://5e.tools/variantrules.html#travel%20at%20sea_gos)
                * In Database
                * In Javascript
                * Tables
                    * Storms
                        * Magic Storms
                        * Non-magic Storms
                    * Fire
                    * Infestation
                    * Fog
                        * Magic Fog
                        * Non-magic Fog
    * Implement 5etools.net link generation
        * **bugs**
            * swarm of
            * () parentheticals
            * words within words need to be handled
                * E.G. 'rat' in 'ration' and 'rat' in 'triceratops'
            * giant something (E.G. giant wolf spider)
            * faerie dragon (green)
                * 'd' is getting chopped off in 'dragon'
    * [x] DnD Beyond link generation function
* [x] Weather Generator

## Tools
* [x] Bounty Board
    * Have user input data on the site
        * Form input
        * [x] JSON upload
    * Player & GM versions
* Calendar
    * Add Proper UI to the generated week rows
    * In DBs
        1. [x] Calendar of Harptos
        2. [x] Barovian Calendar
        3. Load Custom JSON
        4. Exandrian Calendar
        5. Gregorian Calendar
        6. Calendar of Galifar
        7. Calendar of Golarion
        8. Calendar of Greyhawk
        9. The Lunar Calendar
    * Player & GM versions
* Combat Tracker
    * Enemy Stealth Roll
    * Random PC Picker
    * Auto text initiative order?
    * Player & GM versions?
* [x] Spell Helper
* Ship Expenses
* QuickRoll
    * *local_nav* style got screwed up

## style.css
* UI Bugs
    * Top Nav needs to stick to the top
    * Left Nav needs to stick where it is
    * Left Nav needs to stretch to the bottom
    * Text outputs need to wrap and stay to the right of Left Nav
* Elements
    * Tables
        * Borders
    * Dropdown selectors
    * Text inputs
    * Buttons
    * Text

## Databases
* Combat Encounters
    * Need to redo the following as they're duplicates of others
        * Dungeon (Duplicate of Underdark)
        * Farmland (Duplicate of Grassland)
        * Jungle (Duplicate of Forest)
        * Wasteland (Duplicate of Swamp)
        * Woodland (Duplicate of Forest)
* Non-combat Encounters
    * Need to redo the following as they're duplicates of others
        * Farmland (Duplicate of Grassland)
        * Hill (Duplicate of Grassland)
        * Wasteland (Duplicate of Road) {WTF? Why did I pick road?}
        * Woodland (Duplicate of Forest)
* Hazards/COmplications
    * No Data
        * Arctic
        * Carousing
        * Coastal
        * Desert
        * Dungeon
        * Farmland
        * Festivals
        * Forest
        * Grassland
        * Hill
        * Jungle
        * Mountain
        * Open Sea
        * Red Light District
        * Road
        * Swamp
        * Tavern
        * Tavern_Seedy
        * Underdark
        * Underwater
        * Urban
        * Wasteland
        * Woodland
    * Data (not yet added)
        * Ship (Open water, river, etc.)