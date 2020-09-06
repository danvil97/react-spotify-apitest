import React from 'react';
import CSSModules from 'react-css-modules';
import {Field, reduxForm} from 'redux-form'

import FormSelect from '../FormSelect/FormSelect';
import TypeButtons from '../TypeButtons/TypeButtons';
import SearchField from '../SearchField/SearchField';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import {BsSearch} from 'react-icons/bs';

import SEARCH from '../../constants/searchButtons';
import styles from './SearchForm.module.scss';

const SearchForm = ({handleSubmit, pristine, reset, submitting}) => {

    return (
        <form styleName='base'>
            <div styleName='base__firstRow'>
                <Field component={SearchField} name='text'/>
                <Field component={FormSelect} optionsList={SEARCH.limitList} name='limit'/>
            </div>
            <div styleName='base__secondRow'>
                <Field component={TypeButtons} name='type'/>

                <div styleName='searchButton'>
                    <PrimaryButton withBorder type='submit' disabled={pristine || submitting}>
                        <BsSearch/>
                    </PrimaryButton>
                </div>
            </div>
        </form>
    );
};

export default reduxForm({form: 'searchForm'})(CSSModules(SearchForm, styles));
